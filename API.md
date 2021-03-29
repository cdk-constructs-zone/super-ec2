# API Reference

**Classes**

Name|Description
----|-----------
[JenkinsEC2](#super-ec2-jenkinsec2)|*No description*
[SuperEC2Base](#super-ec2-superec2base)|*No description*


**Interfaces**

Name|Description
----|-----------
[IJenkinsEC2Props](#super-ec2-ijenkinsec2props)|*No description*
[ISuperEC2BaseProps](#super-ec2-isuperec2baseprops)|*No description*


**Enums**

Name|Description
----|-----------
[AmiOSType](#super-ec2-amiostype)|*No description*



## class JenkinsEC2 🔹 <a id="super-ec2-jenkinsec2"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [SuperEC2Base](#super-ec2-superec2base)

### Initializer




```ts
new JenkinsEC2(scope: Construct, id: string, props?: IJenkinsEC2Props)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[IJenkinsEC2Props](#super-ec2-ijenkinsec2props)</code>)  *No description*


### Methods


#### jenkinsUserData()🔹 <a id="super-ec2-jenkinsec2-jenkinsuserdata"></a>



```ts
jenkinsUserData(): Array<string>
```


__Returns__:
* <code>Array<string></code>



## class SuperEC2Base 🔹 <a id="super-ec2-superec2base"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)
__Implemented by__: [JenkinsEC2](#super-ec2-jenkinsec2)

### Initializer




```ts
new SuperEC2Base(scope: Construct, id: string, props: ISuperEC2BaseProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ISuperEC2BaseProps](#super-ec2-isuperec2baseprops)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**defaultSecurityGroup**🔹 | <code>[SecurityGroup](#aws-cdk-aws-ec2-securitygroup)</code> | <span></span>
**instance**🔹 | <code>[IInstance](#aws-cdk-aws-ec2-iinstance)</code> | <span></span>
**userData**🔹 | <code>[UserData](#aws-cdk-aws-ec2-userdata)</code> | <span></span>
**vpc**🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | <span></span>



## interface IJenkinsEC2Props 🔹 <a id="super-ec2-ijenkinsec2props"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**amiOSType**?🔹 | <code>[AmiOSType](#super-ec2-amiostype)</code> | Super EC2 OS you want.<br/>__*Default*__: Amzaon Linux 2.
**instanceType**?🔹 | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | Super EC2 Instance Type.<br/>__*Default*__: t3.small.
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Super EC2 Vpc.<br/>__*Default*__: Create a new Vpc.



## interface ISuperEC2BaseProps 🔹 <a id="super-ec2-isuperec2baseprops"></a>




### Properties


Name | Type | Description 
-----|------|-------------
**amiOSType**?🔹 | <code>[AmiOSType](#super-ec2-amiostype)</code> | Super EC2 OS you want.<br/>__*Default*__: Amzaon Linux 2.
**instanceType**?🔹 | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | Super EC2 Instance Type.<br/>__*Default*__: t3.small.
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Super EC2 Vpc.<br/>__*Default*__: Create a new Vpc.



## enum AmiOSType 🔹 <a id="super-ec2-amiostype"></a>



Name | Description
-----|-----
**UBUNTU_18_04** 🔹|Ubuntu 18.04 ami.
**UBUNTU_20_04** 🔹|Ubuntu 20.04 ami.
**CENTOS_7** 🔹|CentOS 7 ami.
**CENTOS_8** 🔹|CentOS 8 ami.
**AMAZON_LINUX_2** 🔹|Amazon Linux 2 ami.
**AMAZON_LINUX** 🔹|Amazon Linux  ami.


