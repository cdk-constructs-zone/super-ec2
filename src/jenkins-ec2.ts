import * as cdk from '@aws-cdk/core';
import { SuperEC2Base, ISuperEC2BaseProps } from './super-ec2';
export interface IJenkinsEC2Props extends ISuperEC2BaseProps {};

export class JenkinsEC2 extends SuperEC2Base {
  constructor(scope: cdk.Construct, id: string, props: IJenkinsEC2Props={} ) {
    super(scope, id, props);
    this.userData.addCommands(...this.jenkinsUserData());
  }
  public jenkinsUserData(): string {
    return 'echo Install Jenkins';
  }
}