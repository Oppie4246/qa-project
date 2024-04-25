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

