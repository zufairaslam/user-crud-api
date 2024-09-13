require('dotenv').config({ path: './src/config/.env' });
const app = require('./config/express');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    console.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
    console.info('SIGTERM received');
    if (server) {
        server.close();
    }
});


module.exports = server;
