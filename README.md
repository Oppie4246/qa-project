# qa-project

## Backend

Spring boot app that hosts an in-memory table using H2 and manages buyers and sellers. 

## Run Project:

1. cd folder containing pem file
   
2. connect to EC2 instance via SSH  -  ssh -i "document-name.pem" ec2-user@"public ipv4 NDS"

3. docker-compose -f  docker-compose.yml up

## Useful tools

### Thunderclient

Thunderclient is a VSCode extension that basically replaces Postman. 

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

You can import the test suite by clicking on the `Import` button in the Thunderclient toolbar, then selecting [thunder-collection_EstateAgentTests.json](spring-boot-backend/thunder-collection_EstateAgentTests.json)

## Other notes

### Install docker

sudo yum install -y docker

### Install docker-compose

sudo 

### QA FASE Link:

https://gitlab.com/qa1322911/fase

### Trello Project 3 link:

https://trello.com/invite/b/iXD1Xy0S/ATTI0251b413fbaccc2912918da9339678b709BC3052/project-3

### Swagger URL Link:

http://localhost:8080/swagger-ui/index.html

## AWS architecture

![Image of AWS architecture structure](https://github.com/Oppie4246/qa-project/blob/639053efa5676a2dde686337528a2ef30ea99024/AWS%20architecture.png)

Deploying frontend and backend web application using Docker containers and Docker compose on a single EC2 instance within a VPC offers streamlined and efficent way to manage, deploy and scale the application while ensuring consistency, portablity and secuirty.

### Advantages:

#### Isolation and portability:

lightweight isolated environment for application, ensuring each component runs independantly

isolation makes it easier to manage dependancies and ensures consistency across different enviornments, from development to test, to production

#### Scalability and Resource Efficiency:

containerising the application means we can easily scale the infrastructure by adding more instances of the containers as needed

docker containers are more resource-efficent compared to tranditional VMs allowing optimisation of resourece uitlisiaton on the EC2 instance

#### Simplified Deployment:

using Docker Compose to define and manage the mutli-container application simplifies the deployment process

with a single YAML file the configuration can be specified for all the containers making it easy to  replicate and delpy the applicaiton across different environments

#### Version Control and Rollbacks:

docker images serve as imutable artifacts that encapsulate the application and its dependancies making it straightforward to verson control the application and roll back to a previous version if needed

different versions can be tagged and managed using Docker images stored in the Docker Hub repository

#### Consistent Development and Production Environments:

Docker ensures consistency between the development, testing and production environments

developers can work on their local machines with the same Docker images used in production, reducing any issues with it working on one machine but not another - this streamlines the development process

#### Security:

Docker containers provide enhanced security by isolating applicaitons from each other and from the underlying host system

each container runs its own isolated environment, reducing the risk of secuirty vulnerabilities and ensuring better containment in case of a breach

#### Resource Uitilisation:

running mutliple containers on a single EC2 instance allows for better resource utilisaton and cost optimisation

instead of dedicating sperate instances for frontend and backend they can be run on a single instance - multiple tasks can be run simultanously in seperate compartments

#### Flexibility and Modularity:

Docker contains promote modular architecture - the frontend and backend are each encapsulated in their own containers, this approach can make it easier to update and maintan different parts of applications independantly without it impacting the other components

## Future options

![Image of AWS architecture structure future options](https://github.com/Oppie4246/qa-project/blob/9bf404fe89cf4808c33fb07b03de7b614fe0afda/AWS%20future%20option.png)

### Docker Hub Repository

contains frontend and backend docker images


### AWS ECS:

#### EC2 Instances:

the underlying infrastructure where ECS taks will run

#### Task Definitions:

define how the containers should be launched, including docker image to use, CPU and memory requirements and network configuration

#### Frontend and Backend  Service:

ECS services that manage and maintain a specified number of instances of frontend and backend tasks

#### Load Balancer:

distributes incoming traffic across multiple instances of frontend service

### AWS  Services:

#### CloudWatch:

monitors EC2 instances for metrics and logs

#### IAM:

manages permissions to authorise ECS tasks to interact with other AWS services

#### CI/CD Pipeline:

automates the deployment process using services like AWS CodePipeline, AWS CodeBuild and AWS CodeDeploy

