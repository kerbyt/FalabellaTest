const productsRoutes = require('./products.routes');

module.exports = ({router}) => {
    productsRoutes(router);
    return router;
} 

