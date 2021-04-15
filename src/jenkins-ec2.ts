import * as certmgr from '@aws-cdk/aws-certificatemanager';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as targets from '@aws-cdk/aws-elasticloadbalancingv2-targets';
import * as cdk from '@aws-cdk/core';
import { SuperEC2Base, ISuperEC2BaseProps } from './super-ec2';
import { ELBtype, IDomainProps, SuperDomain } from './super-ec2-interfaces';

export interface IJenkinsEC2Props extends ISuperEC2BaseProps {
  /**
   * Provide a loadbalancer.
   *
   * Only support ALB and NLB.
   * @default - Create ApplicationLoadBalancer
   */
  loadbalancer?: elbv2.ApplicationLoadBalancer | elbv2.NetworkLoadBalancer;
  /**
   * ELB type.
   * @default - ELBtype.ALB
   */
  loadbalancerType?: ELBtype;
  /**
   * Privide domain attribute.
   * @default - Not use certificate and route53
   */
  domain?: IDomainProps;
};


export class JenkinsEC2 extends SuperEC2Base {
  readonly loadbalancer: elbv2.ApplicationLoadBalancer | elbv2.NetworkLoadBalancer;
  readonly domain?: SuperDomain;

  constructor(scope: cdk.Construct, id: string, props: IJenkinsEC2Props) {
    super(scope, id, props);
    this.userData.addCommands(...this.jenkinsUserData());
    this._addIngressRule(this.defaultSecurityGroup, [22, 8080, 50000]);
    this.loadbalancer = props.loadbalancer?? this._setloadbalancer(props.loadbalancerType);

    if (props.domain) {
      this.domain = new SuperDomain(this, 'superDomain',
        { ...props.domain, loadbalancer: this.loadbalancer },
      );
      this._setlistener(this.domain.acm);
    } else {
      this._set80listener();
    }
  }
  public jenkinsUserData(): string[] {
    return ['yum install docker -y',
      'systemctl start docker',
      'usermod -aG docker ec2-user',
      'usermod -aG docker ssm-user',
      'chmod +x /var/run/docker.sock',
      'systemctl restart docker && systemctl enable docker',
      'mkdir /home/ec2-user/jenkins-data',
      'docker run --name jks --rm -d -u root -p 8080:8080 -p 50000:50000 -v /home/ec2-user/jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /home/ec2-user:/home jenkinsci/blueocean'];
  };
  private _addIngressRule(SecurityGroup: ec2.SecurityGroup, Ports: number[]): ec2.SecurityGroup {
    Ports.forEach(port => {
      SecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(port));
    });
    return SecurityGroup;
  }
  private _setloadbalancer(loadbalancerType: ELBtype | undefined): elbv2.ApplicationLoadBalancer | elbv2.NetworkLoadBalancer {
    switch (loadbalancerType) {
      case ELBtype.ALB:
        return new elbv2.ApplicationLoadBalancer(this, 'jksALB', {
          vpc: this.vpc,
          loadBalancerName: 'jksALB',
          internetFacing: true,
        });
      case ELBtype.NLB:
        return new elbv2.NetworkLoadBalancer(this, 'jksNLB', {
          vpc: this.vpc,
          loadBalancerName: 'jksNLB',
          internetFacing: true,
        });
      default: {
        return new elbv2.ApplicationLoadBalancer(this, 'jksALB', {
          vpc: this.vpc,
          loadBalancerName: 'jksALB',
          internetFacing: true,
        });
      }
    }
  }
  private _setlistener(acm: certmgr.ICertificate) {
    const httpslistener = this.loadbalancer.addListener('httpsListener', {
      certificates: [elbv2.ListenerCertificate.fromArn(acm.certificateArn)],
      port: 443,
    });
    if (this.loadbalancer instanceof elbv2.ApplicationLoadBalancer) {
      this.loadbalancer.addListener('httpListener', {
        port: 80,
        open: true,
        defaultAction: elbv2.ListenerAction.redirect({
          protocol: 'HTTPS',
          host: '#{host}',
          path: '/#{path}',
          query: '/#{query}',
          port: '443',
        }),
      });
    }
    if (httpslistener instanceof elbv2.ApplicationListener) {
      httpslistener.addTargets('Targets', {
        port: 8080,
        protocol: elbv2.ApplicationProtocol.HTTP,
        targets: [new targets.InstanceTarget(this.instance)],
      });
      httpslistener.connections.allowTo(this.instance, ec2.Port.tcp(8080));
    } else if (httpslistener instanceof elbv2.NetworkListener) {
      httpslistener.addTargets('Targets', {
        port: 8080,
        protocol: elbv2.Protocol.TCP,
        targets: [new targets.InstanceTarget(this.instance)],
      });
    }
  }
  private _set80listener() {
    const httplistener = this.loadbalancer.addListener('httpListener', {
      port: 80,
    });
    if (httplistener instanceof elbv2.ApplicationListener) {
      httplistener.addTargets('Targets', {
        port: 8080,
        protocol: elbv2.ApplicationProtocol.HTTP,
        targets: [new targets.InstanceTarget(this.instance)],
      });
      httplistener.connections.allowTo(this.instance, ec2.Port.tcp(8080));
    } else if (httplistener instanceof elbv2.NetworkListener) {
      httplistener.addTargets('Targets', {
        port: 8080,
        protocol: elbv2.Protocol.TCP,
        targets: [new targets.InstanceTarget(this.instance)],
      });
    }
  }
}