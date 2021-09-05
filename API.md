# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### JenkinsEC2 <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2"></a>

#### Initializers <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.Initializer"></a>

```typescript
import { JenkinsEC2 } from '@cdk-constructs-zone/super-ec2'

new JenkinsEC2(scope: Construct, id: string, props: IJenkinsEC2Props)
```

##### `scope`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.parameter.props"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.IJenkinsEC2Props`](#@cdk-constructs-zone/super-ec2.IJenkinsEC2Props)

---

#### Methods <a name="Methods"></a>

##### `jenkinsUserData` <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.jenkinsUserData"></a>

```typescript
public jenkinsUserData()
```


#### Properties <a name="Properties"></a>

##### `loadbalancer`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.property.loadbalancer"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer) | [`@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer)

---

##### `domain`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.JenkinsEC2.property.domain"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.SuperDomain`](#@cdk-constructs-zone/super-ec2.SuperDomain)

---


### SuperDomain <a name="@cdk-constructs-zone/super-ec2.SuperDomain"></a>

#### Initializers <a name="@cdk-constructs-zone/super-ec2.SuperDomain.Initializer"></a>

```typescript
import { SuperDomain } from '@cdk-constructs-zone/super-ec2'

new SuperDomain(scope: Construct, id: string, props: ISuperDomainProps)
```

##### `scope`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.parameter.props"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.ISuperDomainProps`](#@cdk-constructs-zone/super-ec2.ISuperDomainProps)

---



#### Properties <a name="Properties"></a>

##### `acm`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.property.acm"></a>

- *Type:* [`@aws-cdk/aws-certificatemanager.ICertificate`](#@aws-cdk/aws-certificatemanager.ICertificate)

---

##### `record`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.property.record"></a>

- *Type:* [`@aws-cdk/aws-route53.ARecord`](#@aws-cdk/aws-route53.ARecord)

---

##### `zone`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperDomain.property.zone"></a>

- *Type:* [`@aws-cdk/aws-route53.IHostedZone`](#@aws-cdk/aws-route53.IHostedZone)

---


### SuperEC2Base <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base"></a>

#### Initializers <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.Initializer"></a>

```typescript
import { SuperEC2Base } from '@cdk-constructs-zone/super-ec2'

new SuperEC2Base(scope: Construct, id: string, props: ISuperEC2BaseProps)
```

##### `scope`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.parameter.props"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps`](#@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps)

---



#### Properties <a name="Properties"></a>

##### `defaultSecurityGroup`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.property.defaultSecurityGroup"></a>

- *Type:* [`@aws-cdk/aws-ec2.SecurityGroup`](#@aws-cdk/aws-ec2.SecurityGroup)

---

##### `instance`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.property.instance"></a>

- *Type:* [`@aws-cdk/aws-ec2.Instance`](#@aws-cdk/aws-ec2.Instance)

---

##### `userData`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.property.userData"></a>

- *Type:* [`@aws-cdk/aws-ec2.UserData`](#@aws-cdk/aws-ec2.UserData)

---

##### `vpc`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.SuperEC2Base.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---




## Protocols <a name="Protocols"></a>

### IDomainProps <a name="@cdk-constructs-zone/super-ec2.IDomainProps"></a>

- *Implemented By:* [`@cdk-constructs-zone/super-ec2.IDomainProps`](#@cdk-constructs-zone/super-ec2.IDomainProps), [`@cdk-constructs-zone/super-ec2.ISuperDomainProps`](#@cdk-constructs-zone/super-ec2.ISuperDomainProps)


#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.IDomainProps.property.hostedZoneId"></a>

- *Type:* `string`

HostZoneID.

---

##### `recordName`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.IDomainProps.property.recordName"></a>

- *Type:* `string`

recordname (e.g., superjks).

---

##### `zoneName`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.IDomainProps.property.zoneName"></a>

- *Type:* `string`

zonename (e.g., `cdk-construct-zone.com`).

---

##### `acm`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IDomainProps.property.acm"></a>

- *Type:* [`@aws-cdk/aws-certificatemanager.ICertificate`](#@aws-cdk/aws-certificatemanager.ICertificate)
- *Default:* Create a new certificate (validate from DNS)

Provide a certificate.

---

##### `ttl`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IDomainProps.property.ttl"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)

record cache time.

---

### IJenkinsEC2Props <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props"></a>

- *Extends:* [`@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps`](#@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps)

- *Implemented By:* [`@cdk-constructs-zone/super-ec2.IJenkinsEC2Props`](#@cdk-constructs-zone/super-ec2.IJenkinsEC2Props)


#### Properties <a name="Properties"></a>

##### `amiOSType`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.amiOSType"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.AmiOSType`](#@cdk-constructs-zone/super-ec2.AmiOSType)
- *Default:* Amzaon Linux 2.

Super EC2 OS you want.

---

##### `instanceType`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.instanceType"></a>

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)
- *Default:* t3.small.

Super EC2 Instance Type.

---

##### `vpc`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)
- *Default:* Create a new Vpc.

Super EC2 Vpc.

---

##### `domain`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.domain"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.IDomainProps`](#@cdk-constructs-zone/super-ec2.IDomainProps)
- *Default:* Not use certificate and route53

Provide domain attribute.

---

##### `loadbalancer`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.loadbalancer"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer) | [`@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer)
- *Default:* Create ApplicationLoadBalancer

Provide a loadbalancer.

Only support ALB and NLB.

---

##### `loadbalancerType`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.IJenkinsEC2Props.property.loadbalancerType"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.ELBtype`](#@cdk-constructs-zone/super-ec2.ELBtype)
- *Default:* ELBtype.ALB

ELB type.

---

### ISuperDomainProps <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps"></a>

- *Extends:* [`@cdk-constructs-zone/super-ec2.IDomainProps`](#@cdk-constructs-zone/super-ec2.IDomainProps)

- *Implemented By:* [`@cdk-constructs-zone/super-ec2.ISuperDomainProps`](#@cdk-constructs-zone/super-ec2.ISuperDomainProps)


#### Properties <a name="Properties"></a>

##### `hostedZoneId`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.hostedZoneId"></a>

- *Type:* `string`

HostZoneID.

---

##### `recordName`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.recordName"></a>

- *Type:* `string`

recordname (e.g., superjks).

---

##### `zoneName`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.zoneName"></a>

- *Type:* `string`

zonename (e.g., `cdk-construct-zone.com`).

---

##### `acm`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.acm"></a>

- *Type:* [`@aws-cdk/aws-certificatemanager.ICertificate`](#@aws-cdk/aws-certificatemanager.ICertificate)
- *Default:* Create a new certificate (validate from DNS)

Provide a certificate.

---

##### `ttl`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.ttl"></a>

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)

record cache time.

---

##### `loadbalancer`<sup>Required</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperDomainProps.property.loadbalancer"></a>

- *Type:* [`@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.ApplicationLoadBalancer) | [`@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer`](#@aws-cdk/aws-elasticloadbalancingv2.NetworkLoadBalancer)

---

### ISuperEC2BaseProps <a name="@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps"></a>

- *Implemented By:* [`@cdk-constructs-zone/super-ec2.IJenkinsEC2Props`](#@cdk-constructs-zone/super-ec2.IJenkinsEC2Props), [`@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps`](#@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps)


#### Properties <a name="Properties"></a>

##### `amiOSType`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps.property.amiOSType"></a>

- *Type:* [`@cdk-constructs-zone/super-ec2.AmiOSType`](#@cdk-constructs-zone/super-ec2.AmiOSType)
- *Default:* Amzaon Linux 2.

Super EC2 OS you want.

---

##### `instanceType`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps.property.instanceType"></a>

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)
- *Default:* t3.small.

Super EC2 Instance Type.

---

##### `vpc`<sup>Optional</sup> <a name="@cdk-constructs-zone/super-ec2.ISuperEC2BaseProps.property.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)
- *Default:* Create a new Vpc.

Super EC2 Vpc.

---

## Enums <a name="Enums"></a>

### AmiOSType <a name="AmiOSType"></a>

#### `UBUNTU_18_04` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.UBUNTU_18_04"></a>

Ubuntu 18.04 ami.

---


#### `UBUNTU_20_04` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.UBUNTU_20_04"></a>

Ubuntu 20.04 ami.

---


#### `CENTOS_7` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.CENTOS_7"></a>

CentOS 7 ami.

---


#### `CENTOS_8` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.CENTOS_8"></a>

CentOS 8 ami.

---


#### `AMAZON_LINUX_2` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.AMAZON_LINUX_2"></a>

Amazon Linux 2 ami.

---


#### `AMAZON_LINUX` <a name="@cdk-constructs-zone/super-ec2.AmiOSType.AMAZON_LINUX"></a>

Amazon Linux  ami.

---


### ELBtype <a name="ELBtype"></a>

#### `ALB` <a name="@cdk-constructs-zone/super-ec2.ELBtype.ALB"></a>

Application Load Balancer.

---


#### `NLB` <a name="@cdk-constructs-zone/super-ec2.ELBtype.NLB"></a>

Network Load Balancer.

---

