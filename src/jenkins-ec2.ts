import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { SuperEC2Base, ISuperEC2BaseProps } from './super-ec2';
export interface IJenkinsEC2Props extends ISuperEC2BaseProps {};

export class JenkinsEC2 extends SuperEC2Base {
  constructor(scope: cdk.Construct, id: string, props: IJenkinsEC2Props={} ) {
    super(scope, id, props);
    this.userData.addCommands(...this.jenkinsUserData());
    this._addIngressRule(this.defaultSecurityGroup, [22, 80, 8080, 443]);
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
}