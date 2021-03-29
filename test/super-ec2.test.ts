import { App, Stack } from '@aws-cdk/core';
import { JenkinsEC2 } from '../src';
import '@aws-cdk/assert/jest';

describe('SpotInstance', () => {
  let mockApp: App;
  let stack: Stack;

  beforeEach(() => {
    mockApp = new App();
    stack = new Stack(mockApp, 'testing-stack');
  });

  test('create single spot instance', () => {
    new JenkinsEC2(stack, 'JenkinsEC2');
    expect(stack).toHaveResourceLike('AWS::EC2::Instance');
  });
});