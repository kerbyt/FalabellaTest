const resource = 'products';
const controller = require('../controllers/products.controller');
module.exports = ( router) => {
    router.createRoutes(resource)(controller);    
    return router;
}