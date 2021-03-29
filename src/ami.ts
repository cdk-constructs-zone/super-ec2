import * as ec2 from '@aws-cdk/aws-ec2';

export enum AmiOSType {
  /**
   * Ubuntu 18.04 ami.
   */
  UBUNTU_18_04 = 'UBUNTU_18_04',

  /**
   * Ubuntu 20.04 ami.
   */
  UBUNTU_20_04 = 'UBUNTU_20_04',

  /**
   * CentOS 7 ami.
   */
  CENTOS_7 = 'CENTOS_7',

  /**
   * CentOS 8 ami.
   */
  CENTOS_8 = 'CENTOS_8',

  /**
   * Amazon Linux 2 ami.
   */
  AMAZON_LINUX_2 = 'AMAZON_LINUX_2',

  /**
   * Amazon Linux  ami.
   */
  AMAZON_LINUX = 'AMAZON_LINUX',

}

export function amiFinder(amiostype: AmiOSType ): ec2.IMachineImage {
  switch (amiostype) {
    case AmiOSType.CENTOS_7:
      return ec2.MachineImage.lookup({
        filters: {
          ['product-code']: ['aw0evgkw8e5c1q413zgy5pjce'],
        },
        name: '*CentOS*',
        owners: ['aws-marketplace'],
      });
    case AmiOSType.CENTOS_8:
      return ec2.MachineImage.lookup({
        filters: {
          ['product-code']: ['aw0evgkw8e5c1q413zgy5pjce'],
        },
        name: '*CentOS*',
        owners: ['aws-marketplace'],
      });
    case AmiOSType.UBUNTU_18_04:
      return ec2.MachineImage.lookup({
        //name: '*ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server*',
        name: '*ubuntu-bionic-18.04-amd64-*',
        owners: ['099720109477'],
        filters: {
          ['root-device-type']: ['ebs'],
        },
      });
    case AmiOSType.UBUNTU_20_04:
      return ec2.MachineImage.lookup({
        name: '*ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server*',
        owners: ['099720109477'],
        filters: {
          ['root-device-type']: ['ebs'],
        },
      });
    case AmiOSType.AMAZON_LINUX:
      return ec2.MachineImage.latestAmazonLinux();
    case AmiOSType.AMAZON_LINUX_2:
      return ec2.MachineImage.latestAmazonLinux( { generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 });
  }
}