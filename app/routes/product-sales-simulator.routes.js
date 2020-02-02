const resource = 'product_sales_simulator';
const controller = require('../controllers/product-sales-simulator.controller');
module.exports = ( router) => {
    router.createRoutes(resource)(controller);    
    return router;
}