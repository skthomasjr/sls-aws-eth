'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const server = require('./server');

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(
    awsServerlessExpress.createServer(server), event, context);
};
