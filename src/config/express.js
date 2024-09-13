const express = require('express');
const exceptionHandler = require('express-exception-handler');
const error = require('../api/middlewares/error');
const connectDB = require("../api/database/mongodb");

exceptionHandler.handle();


const app = express();
app.get('/', (req, res) => {
    res.send('Welcome To My Project, User Crud Api!');
});
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
const routes = require('../api/routes/');
app.use('/api', routes);
app.use(error.handler);
connectDB();

module.exports = app;
