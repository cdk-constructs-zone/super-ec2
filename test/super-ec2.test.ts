import { App, Stack } from '@aws-cdk/core';
import { ELBtype, JenkinsEC2 } from '../src';
import '@aws-cdk/assert/jest';

describe('SpotInstance', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create single spot instance', () => {
    new JenkinsEC2(stack, 'JenkinsEC2', {});
    expect(stack).toHaveResourceLike('AWS::EC2::Instance');
  });
});

describe('CreateJksALB', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create jks with alb', () => {
    new JenkinsEC2(stack, 'JenkinsEC2', { loadbalancerType: ELBtype.ALB });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
      Type: 'application',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::TargetGroup', {
      Port: 8080,
      Protocol: 'HTTP',
      TargetType: 'instance',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::Listener', {
      Port: 80,
      Protocol: 'HTTP',
    });
  });
});

describe('CreateJksNLB', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create jks with nlb', () => {
    new JenkinsEC2(stack, 'JenkinsEC2', { loadbalancerType: ELBtype.NLB });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
      Type: 'network',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::TargetGroup', {
      Port: 8080,
      Protocol: 'TCP',
      TargetType: 'instance',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::Listener', {
      Port: 80,
      Protocol: 'TCP',
    });
  });
});


describe('CreateJksWithALBDomain', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create jks with alb and domain', () => {
    new JenkinsEC2(stack, 'JenkinsEC2', {
      loadbalancerType: ELBtype.ALB,
      domain: {
        hostedZoneId: 'aaabbb',
        zoneName: 'aaa.bbb',
        recordName: 'superjks',
      },
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
      Type: 'application',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::Listener', {
      Port: 80,
      Protocol: 'HTTP',
      DefaultActions: [
        {
          RedirectConfig: {
            Host: '#{host}',
            Path: '/#{path}',
            Port: '443',
            Protocol: 'HTTPS',
            Query: '/#{query}',
            StatusCode: 'HTTP_302',
          },
          Type: 'redirect',
        },
      ],
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::Listener', {
      Port: 443,
      Protocol: 'HTTPS',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::TargetGroup', {
      Port: 8080,
      Protocol: 'HTTP',
      TargetType: 'instance',
    });
    expect(stack).toHaveResource('AWS::Route53::RecordSet', {
      Name: 'superjks.aaa.bbb.',
      HostedZoneId: 'aaabbb',
    });
    expect(stack).toHaveResource('AWS::CertificateManager::Certificate', {
      DomainName: '*.aaa.bbb',
      DomainValidationOptions: [
        {
          DomainName: '*.aaa.bbb',
          HostedZoneId: 'aaabbb',
        },
      ],
      ValidationMethod: 'DNS',
    });
  });
});

describe('CreateJksWithNLBDomain', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create jks with nlb and domain', () => {
    new JenkinsEC2(stack, 'JenkinsEC2', {
      loadbalancerType: ELBtype.NLB,
      domain: {
        hostedZoneId: 'aaabbb',
        zoneName: 'aaa.bbb',
        recordName: 'superjks',
      },
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
      Type: 'network',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::Listener', {
      Port: 443,
      Protocol: 'TLS',
    });
    expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::TargetGroup', {
      Port: 8080,
      Protocol: 'TCP',
      TargetType: 'instance',
    });
    expect(stack).toHaveResource('AWS::Route53::RecordSet', {
      Name: 'superjks.aaa.bbb.',
      HostedZoneId: 'aaabbb',
    });
    expect(stack).toHaveResource('AWS::CertificateManager::Certificate', {
      DomainName: '*.aaa.bbb',
      DomainValidationOptions: [
        {
          DomainName: '*.aaa.bbb',
          HostedZoneId: 'aaabbb',
        },
      ],
      ValidationMethod: 'DNS',
    });
  });
});