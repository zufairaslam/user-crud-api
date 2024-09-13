require('dotenv').config({ path: './src/config/.env' })
const config = require('./config/config')
const app = require('./config/express')


let server;


if (require.main === module) {
    app.listen(config.port, async () => {
        console.info(`Listening on port ${config.port}`)
    })
}


// Access the environment variables

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info('Server closed')
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
}

const unexpectedErrorHandler = (error) => {
    console.error(error)
    exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
    console.info('SIGTERM received')
    if (server) {
        server.close()
    }
})

module.exports = server
