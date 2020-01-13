# Deploy API Backend to Kyma as a Lambda Function

Kyma simplyfies running simple node functions through its serverless [Lambda/Function as a Service](https://kyma-project.io/docs/components/serverless/#architecture-architecture-istio) runtime. Here a developer can focus on writing the actual business level code and ignore all the boiler plate code for starting a http server, parsing the request, etc. Furthermore Kyma also takes over the packaging of code and fetching the depencies. Finally it also scales the function to meet the needs of the current load. 

Creating such a function is rater simple. In the UI (within your namespace), go to the `Development Section` and click on `Lambdas`. Clicking the `Add Lambda` button lets you create a new function. 

![create-lambda](../assets/create-lambda.png)

Create the function with name `conuhacks-api`. and expose it via https as shown in the screenshots below:

![create-lambda 2](../assets/create-lambda-2.png)
![expose-lambda](../assets/create-lambda-3.png)

Now you copy and paste the code provided in [lambda.js](lambda.js):

![create-lambda 4](../assets/create-lambda-4.png)

To manage the node dependencies, you have to activate `Dependencies` and copy and paste the contents of [package.json](package.json):

![create-lambda 5](../assets/create-lambda-5.png)

After creating the Lambda, the system will take some time to spin up the running instance. To determine the current status go back to the main screen and refresh periodically. It will eventually switch as shown below:

![create-lambda 7](../assets/create-lambda-7.png)
![create-lambda 8](../assets/create-lambda-8.png)

Then you can test the API through a REST client like postman. To retrieve the URL of the Lambda, go back to the lambda and hover over the `http` label. This will show the url. 

![create-lambda 9](../assets/create-lambda-9.png)