const resource = 'sold_products';
const controller = require('../controllers/sold-product.controller');
module.exports = ( router) => {
    router.get(`/${resource}/:id`, controller.getObject)
    router.get(`/${resource}`, controller.getObjects)
    router.post(`/${resource}`, controller.saveObject)
    router.put(`/${resource}/:id`, controller.updateObject)
    router.delete(`/${resource}/:id`, controller.deleteObject) 
    return router;
}