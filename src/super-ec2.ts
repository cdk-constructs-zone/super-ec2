import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { AmiOSType, amiFinder } from './ami';
export interface ISuperEC2BaseProps {
  /**
   * Super EC2 OS you want.
   *
   * @default - Amzaon Linux 2.
   */
  amiOSType?: AmiOSType;

  /**
   * Super EC2 Vpc.
   *
   * @default - Create a new Vpc.
   */
  vpc?: ec2.IVpc;

  /**
   * Super EC2 Instance Type.
   *
   * @default - t3.small.
   */
  instanceType?: ec2.InstanceType;

}

export abstract class SuperEC2Base extends cdk.Construct {
  readonly instance: ec2.Instance;
  readonly vpc: ec2.IVpc;
  readonly userData: ec2.UserData;
  readonly defaultSecurityGroup: ec2.SecurityGroup;
  constructor(scope: cdk.Construct, id: string, props: ISuperEC2BaseProps ) {
    super(scope, id);
    this.vpc = props.vpc ?? new ec2.Vpc(this, 'SuperEC2Vpc', {
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
    });
    this.userData = ec2.UserData.forLinux();
    this.defaultSecurityGroup = new ec2.SecurityGroup(this, 'defaultSecurityGroup', {
      vpc: this.vpc,
    });
    this.instance = new ec2.Instance(this, 'SuperEC2', {
      machineImage: props.amiOSType ? amiFinder(props?.amiOSType) : amiFinder(AmiOSType.AMAZON_LINUX_2),
      vpc: this.vpc,
      instanceType: props.instanceType ?? new ec2.InstanceType('t3.small'),
      userData: this.userData,
      securityGroup: this.defaultSecurityGroup,
    });
    this.instance.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
  }
}