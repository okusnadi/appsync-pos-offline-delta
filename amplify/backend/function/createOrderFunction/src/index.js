const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event, context) {
  console.log('Event=', JSON.stringify(event));
  const input = event.arguments.input;
  const orderId = uuidv4();
  const now = Date.now();

  const order = {
    id: orderId,
    createdAt: now,
    updatedAt: now,
  };

  order.subtotal = input.lineItems.reduce((accum, lineItem) => accum + lineItem.total, 0);
  order.tax = 0.08 * order.subtotal;
  order.total = order.subtotal + order.tax;

  const orderTransaction = {
    Put: {
      TableName: 'Order-mjfvk7kli5b4nk4eb6hm37kxna-prod', // should get this from ENV vars
      Item: {
        __typename: "Order",
        ...order,
      }
    }
  };

  const lineItemsTransaction = input.lineItems.map(lineItem => ({
    Put: {
      TableName: 'LineItem-mjfvk7kli5b4nk4eb6hm37kxna-prod', // should get this from ENV vars
      Item: {
        __typename: "LineItem",
        id: uuidv4(),
        createdAt: now,
        updatedAt: now,
        orderLineItemsId: orderId, // GSI to relate line items to orderId
        ...lineItem,
      },
    },
  }));

  const transactions = [
    orderTransaction,
    ...lineItemsTransaction,
  ];
  
  console.log('transactions=', JSON.stringify(transactions));
  const transactionResult = await dynamoDb.transactWrite({
    TransactItems: transactions,
  }).promise();

  console.log('transactionResult=', JSON.stringify(transactionResult));
  
  return {
    id: orderId,
  };
};
