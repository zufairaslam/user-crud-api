// api/serverless.js

const serverless = require('serverless-http');
require('dotenv').config({ path: './src/config/.env' })

// Import configuration and Express setup
const app = require('../src/config/express');

// Serverless handler
module.exports.handler = serverless(app);

// Optionally, you can handle other aspects like logging or custom handling
