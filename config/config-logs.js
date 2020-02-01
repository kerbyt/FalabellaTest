const winston = require('winston')

const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

function logRequest(req, res, next) {
    let log = { method: req.method, 
                url: req.url, 
              };
    logger.info(log)
    next()
}

function logError(err, req, res, next) {
    let log = { method: req.method, 
                url: req.url, 
                error: err
      };
    logger.error(log)
    next()
}

module.exports = {
    logRequest,
    logError
}