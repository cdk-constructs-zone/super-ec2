# API Reference

**Classes**

Name|Description
----|-----------
[JenkinsEC2](#cdk-constructs-zone-super-ec2-jenkinsec2)|*No description*
[SuperDomain](#cdk-constructs-zone-super-ec2-superdomain)|*No description*
[SuperEC2Base](#cdk-constructs-zone-super-ec2-superec2base)|*No description*


**Interfaces**

Name|Description
----|-----------
[IDomainProps](#cdk-constructs-zone-super-ec2-idomainprops)|*No description*
[IJenkinsEC2Props](#cdk-constructs-zone-super-ec2-ijenkinsec2props)|*No description*
[ISuperDomainProps](#cdk-constructs-zone-super-ec2-isuperdomainprops)|*No description*
[ISuperEC2BaseProps](#cdk-constructs-zone-super-ec2-isuperec2baseprops)|*No description*


**Enums**

Name|Description
----|-----------
[AmiOSType](#cdk-constructs-zone-super-ec2-amiostype)|*No description*
[ELBtype](#cdk-constructs-zone-super-ec2-elbtype)|*No description*



## class JenkinsEC2 🔹 <a id="cdk-constructs-zone-super-ec2-jenkinsec2"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [SuperEC2Base](#cdk-constructs-zone-super-ec2-superec2base)

### Initializer




```ts
new JenkinsEC2(scope: Construct, id: string, props: IJenkinsEC2Props)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[IJenkinsEC2Props](#cdk-constructs-zone-super-ec2-ijenkinsec2props)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**loadbalancer**🔹 | <code>[ApplicationLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-applicationloadbalancer) &#124; [NetworkLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-networkloadbalancer)</code> | <span></span>
**domain**?🔹 | <code>[SuperDomain](#cdk-constructs-zone-super-ec2-superdomain)</code> | __*Optional*__

### Methods


#### jenkinsUserData()🔹 <a id="cdk-constructs-zone-super-ec2-jenkinsec2-jenkinsuserdata"></a>



```ts
jenkinsUserData(): Array<string>
```


__Returns__:
* <code>Array<string></code>



## class SuperDomain 🔹 <a id="cdk-constructs-zone-super-ec2-superdomain"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new SuperDomain(scope: Construct, id: string, props: ISuperDomainProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ISuperDomainProps](#cdk-constructs-zone-super-ec2-isuperdomainprops)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**acm**🔹 | <code>[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)</code> | <span></span>
**record**🔹 | <code>[ARecord](#aws-cdk-aws-route53-arecord)</code> | <span></span>
**zone**🔹 | <code>[IHostedZone](#aws-cdk-aws-route53-ihostedzone)</code> | <span></span>



## class SuperEC2Base 🔹 <a id="cdk-constructs-zone-super-ec2-superec2base"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)
__Implemented by__: [JenkinsEC2](#cdk-constructs-zone-super-ec2-jenkinsec2)

### Initializer




```ts
new SuperEC2Base(scope: Construct, id: string, props: ISuperEC2BaseProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ISuperEC2BaseProps](#cdk-constructs-zone-super-ec2-isuperec2baseprops)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**defaultSecurityGroup**🔹 | <code>[SecurityGroup](#aws-cdk-aws-ec2-securitygroup)</code> | <span></span>
**instance**🔹 | <code>[Instance](#aws-cdk-aws-ec2-instance)</code> | <span></span>
**userData**🔹 | <code>[UserData](#aws-cdk-aws-ec2-userdata)</code> | <span></span>
**vpc**🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | <span></span>



## interface IDomainProps 🔹 <a id="cdk-constructs-zone-super-ec2-idomainprops"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**hostedZoneId**🔹 | <code>string</code> | HostZoneID.
**recordName**🔹 | <code>string</code> | recordname (e.g., superjks).
**zoneName**🔹 | <code>string</code> | zonename (e.g., `cdk-construct-zone.com`).
**acm**?🔹 | <code>[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)</code> | Provide a certificate.<br/>__*Default*__: Create a new certificate (validate from DNS)
**ttl**?🔹 | <code>[Duration](#aws-cdk-core-duration)</code> | record cache time.<br/>__*Optional*__



## interface IJenkinsEC2Props 🔹 <a id="cdk-constructs-zone-super-ec2-ijenkinsec2props"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**amiOSType**?🔹 | <code>[AmiOSType](#cdk-constructs-zone-super-ec2-amiostype)</code> | Super EC2 OS you want.<br/>__*Default*__: Amzaon Linux 2.
**domain**?🔹 | <code>[IDomainProps](#cdk-constructs-zone-super-ec2-idomainprops)</code> | Provide domain attribute.<br/>__*Default*__: Not use certificate and route53
**instanceType**?🔹 | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | Super EC2 Instance Type.<br/>__*Default*__: t3.small.
**loadbalancer**?🔹 | <code>[ApplicationLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-applicationloadbalancer) &#124; [NetworkLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-networkloadbalancer)</code> | Provide a loadbalancer.<br/>__*Default*__: Create ApplicationLoadBalancer
**loadbalancerType**?🔹 | <code>[ELBtype](#cdk-constructs-zone-super-ec2-elbtype)</code> | ELB type.<br/>__*Default*__: ELBtype.ALB
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Super EC2 Vpc.<br/>__*Default*__: Create a new Vpc.



## interface ISuperDomainProps 🔹 <a id="cdk-constructs-zone-super-ec2-isuperdomainprops"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**hostedZoneId**🔹 | <code>string</code> | HostZoneID.
**loadbalancer**🔹 | <code>[ApplicationLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-applicationloadbalancer) &#124; [NetworkLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-networkloadbalancer)</code> | <span></span>
**recordName**🔹 | <code>string</code> | recordname (e.g., superjks).
**zoneName**🔹 | <code>string</code> | zonename (e.g., `cdk-construct-zone.com`).
**acm**?🔹 | <code>[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)</code> | Provide a certificate.<br/>__*Default*__: Create a new certificate (validate from DNS)
**ttl**?🔹 | <code>[Duration](#aws-cdk-core-duration)</code> | record cache time.<br/>__*Optional*__



## interface ISuperEC2BaseProps 🔹 <a id="cdk-constructs-zone-super-ec2-isuperec2baseprops"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**amiOSType**?🔹 | <code>[AmiOSType](#cdk-constructs-zone-super-ec2-amiostype)</code> | Super EC2 OS you want.<br/>__*Default*__: Amzaon Linux 2.
**instanceType**?🔹 | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | Super EC2 Instance Type.<br/>__*Default*__: t3.small.
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Super EC2 Vpc.<br/>__*Default*__: Create a new Vpc.



## enum AmiOSType 🔹 <a id="cdk-constructs-zone-super-ec2-amiostype"></a>



Name | Description
-----|-----
**UBUNTU_18_04** 🔹|Ubuntu 18.04 ami.
**UBUNTU_20_04** 🔹|Ubuntu 20.04 ami.
**CENTOS_7** 🔹|CentOS 7 ami.
**CENTOS_8** 🔹|CentOS 8 ami.
**AMAZON_LINUX_2** 🔹|Amazon Linux 2 ami.
**AMAZON_LINUX** 🔹|Amazon Linux  ami.


## enum ELBtype 🔹 <a id="cdk-constructs-zone-super-ec2-elbtype"></a>



Name | Description
-----|-----
**ALB** 🔹|Application Load Balancer.
**NLB** 🔹|Network Load Balancer.


