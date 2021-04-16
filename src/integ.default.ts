import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { JenkinsEC2 } from './index';
import { ELBtype } from './super-ec2-interfaces';

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new cdk.App();
const stack = new cdk.Stack(app, 'super-ec2-demo', { env } );
const jks = new JenkinsEC2(stack, 'jenkins-ec2', {
  vpc: ec2.Vpc.fromLookup(stack, 'defVpc', { isDefault: true }),
  instanceType: new ec2.InstanceType('t3.large'),
  loadbalancerType: ELBtype.ALB,
});
new cdk.CfnOutput(stack, 'loadbalancerDNS', {
  value: jks.loadbalancer.loadBalancerDnsName,
});
new cdk.CfnOutput(stack, 'instanceID', {
  value: jks.instance.instanceId,
});
app.synth();