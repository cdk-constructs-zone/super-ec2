const { awscdk, javascript } = require('projen');

const PROJECT_DESCRIPTION = 'A construct lib for AWS CDK EC2';

const project = new awscdk.AwsCdkConstructLibrary({
  description: PROJECT_DESCRIPTION,
  author: '@cdk-constructs-zone',
  authorAddress: 'https://github.com/cdk-constructs-zone',
  authorOrganization: true,
  authorUrl: 'https://github.com/cdk-constructs-zone',
  npmAccess: 'public',
  cdkVersion: '1.171.0',
  defaultReleaseBranch: 'main',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'super-ec2',
  repositoryUrl: 'https://github.com/cdk-constructs-zone/super-ec2.git',
  keywords: ['aws', 'cdk', 'ec2', 'construct'],
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
  autoDetectBin: false,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
      schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan', 'benkajaja'],
  },
  devDeps: [
    'xmldom',
  ],
  packageName: '@cdk-constructs-zone/super-ec2',
  publishToPypi: {
    distName: 'super-ec2',
    module: 'super_ec2',
  },
  bundledDeps: [
    '@aws-cdk/assert@^1.134.0',
  ],
  typescriptVersion: '3.9.10',
});
project.package.addField('resolutions', {
  '@types/responselike': '1.0.0',
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', '*.zip'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();
