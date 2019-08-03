## POS Mobile App with AppSync Offline Delta Sync
This React Native mobile app demonstrates how to leverage the offline and delta sync capabilities from AWS AppSync. It uses the AppSync Client and the AWS Amplify Code Generation to create the queries, mutations and subscription definitions. 


<img src="./assets/Screenshots.png" height="520" />

### TODO

- Make `codegen` generate the input types? Like `CreateOrderInput` in the `graphql/mutations.js` file. 
- Stop amplify from autogenerating all queries and mutations when I only need a few? 
- Create a single dynamodb table for orders, lineItems and products