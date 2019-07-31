const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context) {
  console.log('Event=', event);
  // return dynamoDb.transactWrite({
  //   TransactItems: [

  //   ],
  // });
  context.done(null, 'Hello World');
};
