const express = require('express');
const config = require('./config');
const exceptionHandler = require('express-exception-handler');
const error = require('../api/middlewares/error');
const connectDB = require("../api/database/mongodb");

exceptionHandler.handle();


const app = express();

app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
const routes = require('../api/routes/');
app.use('/api', routes);
app.use(error.handler);
connectDB();

module.exports = app;
