# ConUHacks Tutorial

## Project Description
This is a sample project that will be used to introduce our SAP Software Stack for the ConUHacks event. It shows you how to build a sample application in PHP, Python and node.js. Furthermore ist shows how to consume the Application API (Constant accross all 3 languages) on a React frontend. 

All of this is deployed to the "Cloud" using Kubernetes based [Kyma](https://kyma-project.io/) as a runtime.

## Requirements
To leverage these samples we have tried to minimize the software installation requirements by providsing you with a virtual machine with all needed tools installed. Hence all you need is a "player" to execute the image on your laptop. We propose to use the available tooling of VMWare. To install them follow the below links for your respective OS and install according to instructions:

   1. Mac: https://my.vmware.com/web/vmware/details?downloadGroup=FUS-1151-OSS&productId=798 
   2. Windows: https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/15_0|PLAYER-1551|open_source
   
This will enable you to import and work with the provided VM image that can be found here: https://sap-my.sharepoint.com/:u:/p/and_krause/ETYA5D2nJIxLvwvAGvnwlqQBGbWrMNF-ePym4TY4UA3vCw?e=pN2TmI 

The username/password combination for the Linux OS installed is (`hacker/sap`)

Kubernetes uses Docker Containers as a foundation. To make them available in cloud environments, you need an internet facing Container Registry. Docker Hub is such a registry. CReate a free account on https://hub.docker.com/ to finish off the list of prerequisites.

## Download and Installation
This sample project - you need to download it and use the sample code and images. Then follow the step by step instructions in this project in order to setup and run the sample application.

## Steps

This sample is installed in multiple steps:

1. Pick your programming languge of choice and understand/inspect the respective sample application:
    1. [PHP](conuhacks5-php/)
    2. [Python](conuhacks5-python)
    3. [node.js](conuhacks5-node)
2. Create a Docker Image of your sample application and publish it to docker hub
3. Understand/inspect the [react frontend](conuhacks5-react) layer
4. Create a Docker Image of your react frontend and publish it to docker hub
5. Deploy your Application to [Kyma/Kubernetes](kyma)
6. Have a look at additional resources
7. Enjoy Hacking :smile:

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved. 
This file is licensed under the SAP Sample Code License except as noted otherwise in the [LICENSE](LICENSE) file of this project.
 
