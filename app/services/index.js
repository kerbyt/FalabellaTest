module.exports = (express) => {
    const router = require('../helpers/helperRouter')(express);

    return {
        router
    }
}