require('dotenv').config({ path: './src/config/.env' })
const serverless = require('serverless-http');

const app = require('./config/express');


module.exports = serverless(app);
