import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { JenkinsEC2 } from './index';

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};
const app = new cdk.App();
const stack = new cdk.Stack(app, 'super-ec2-demo', { env } );
new JenkinsEC2(stack, 'jenkins-ec2', {
  vpc: ec2.Vpc.fromLookup(stack, 'defVpc', { isDefault: true }),
  instanceType: new ec2.InstanceType('t3.large'),
});

app.synth();