const productsRoutes = require('./products.routes');
const soldProductsRoutes = require('./sold-products.routes');
const productSalesSimulator = require('./product-sales-simulator.routes');
module.exports = ({router}) => {
    productsRoutes(router);
    soldProductsRoutes(router);
    productSalesSimulator(router);
    return router;
} 

