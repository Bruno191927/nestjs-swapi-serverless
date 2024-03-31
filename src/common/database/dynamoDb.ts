import * as AWS from 'aws-sdk';

export const dynamoDB = process.env.IS_OFFLINE
? new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: process.env.DYNAMODB_ENDPOINT,
  })
: new AWS.DynamoDB.DocumentClient();