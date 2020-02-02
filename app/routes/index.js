const productsRoutes = require('./products.routes');
const soldProductsRoutes = require('./sold-products.routes');

module.exports = ({router}) => {
    productsRoutes(router);
    soldProductsRoutes(router);
    return router;
} 

