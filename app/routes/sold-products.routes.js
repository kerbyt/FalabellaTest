const resource = 'sold_products';
const controller = require('../controllers/sold-product.controller');
module.exports = ( router) => {
    router.createRoutes(resource)(controller);    
    return router;
}