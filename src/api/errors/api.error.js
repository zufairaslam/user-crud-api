const ExtendableError = require('./extendable.error')

class APIError extends ExtendableError {
    constructor({ message, errors, status = 500 }) {
        super({
            message,
            errors,
            status,
        })
    }
}

module.exports = APIError
