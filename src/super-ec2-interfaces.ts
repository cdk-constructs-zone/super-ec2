import * as certmgr from '@aws-cdk/aws-certificatemanager';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as r53 from '@aws-cdk/aws-route53';
import * as r53tg from '@aws-cdk/aws-route53-targets';
import * as cdk from '@aws-cdk/core';

export enum ELBtype {

  /**
   * Application Load Balancer
   */
  ALB = 'ALB',

  /**
   * Network Load Balancer
   */
  NLB = 'NLB',

}

export interface IDomainProps {
  /**
   * Provide a certificate
   * @default - Create a new certificate (validate from DNS)
   */
  acm?: certmgr.ICertificate;
  /**
   * HostZoneID
   */
  hostedZoneId: string;
  /**
   * zonename (e.g., `cdk-construct-zone.com`)
   */
  zoneName: string;
  /**
   * recordname (e.g., superjks)
   */
  recordName: string;
  /**
   * record cache time
   * @deafult - 5 mins.
   */
  ttl?: cdk.Duration;

}

export interface ISuperDomainProps extends IDomainProps{
  loadbalancer: elbv2.ApplicationLoadBalancer | elbv2.NetworkLoadBalancer;
}

export class SuperDomain extends cdk.Construct {
  readonly acm: certmgr.ICertificate;
  readonly record: r53.ARecord;
  readonly zone: r53.IHostedZone;
  constructor(scope: cdk.Construct, id: string, props: ISuperDomainProps) {
    super(scope, id);
    this.zone = this._setzone(props);
    this.acm = props.acm ?? this._setacm(props);
    this.record = this._setaliasrecord(props);
  }
  private _setzone(props: ISuperDomainProps) {
    return r53.HostedZone.fromHostedZoneAttributes(this, 'zone', {
      hostedZoneId: props.hostedZoneId,
      zoneName: props.zoneName,
    });
  }
  private _setacm(props: ISuperDomainProps) {
    return new certmgr.Certificate(this, 'cert', {
      domainName: `*.${props.zoneName}`,
      validation: certmgr.CertificateValidation.fromDns(this.zone),
    });
  }
  private _setaliasrecord(props: ISuperDomainProps ) {
    return new r53.ARecord(this, 'alias-alb', {
      zone: this.zone,
      target: r53.RecordTarget.fromAlias(new r53tg.LoadBalancerTarget(props.loadbalancer)),
      recordName: props.recordName,
      ttl: props.ttl ?? cdk.Duration.minutes(5),
    });
  }
}