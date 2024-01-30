'use strict';

module.exports.myLambdaHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from My Lambda Function!',
      input: event,
    }),
  };
};
