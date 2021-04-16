const { AwsCdkConstructLibrary } = require('projen');
const { Automation } = require('projen-automate-it');

const PROJECT_NAME = 'super-ec2';
const PROJECT_DESCRIPTION = 'A construct lib for AWS CDK EC2';
const AUTOMATION_TOKEN = 'AUTOMATION_GITHUB_TOKEN';

const project = new AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  author: '@cdk-constructs-zone',
  authorAddress: 'https://github.com/cdk-constructs-zone',
  authorOrganization: true,
  authorUrl: 'https://github.com/cdk-constructs-zone',
  npmAccess: 'public',
  cdkVersion: '1.96.0',
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: '@cdk-constructs-zone/super-ec2',
  repositoryUrl: 'https://github.com/cdk-constructs-zone/super-ec2.git',
  keywords: ['aws', 'cdk', 'ec2', 'construct'],
  dependabot: false,
  catalog: {
    twitter: 'neil_kuan',
    announce: false,
  },
  compat: true,
  stability: 'experimental',
  cdkDependencies: [
    '@aws-cdk/aws-elasticloadbalancingv2-targets',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-autoscaling-hooktargets',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-s3-assets',
    '@aws-cdk/core',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-sns-subscriptions',
    '@aws-cdk/custom-resources',
  ],
  devDeps: [
    'xmldom',
    'projen-automate-it',
  ],
  bundledDeps: ['projen-automate-it'],
  python: {
    distName: 'super-ec2',
    module: 'super_ec2',
  },
});
const automation = new Automation(project, {
  automationToken: AUTOMATION_TOKEN,
});
automation.projenYarnUpgrade();

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', '*.zip'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();
