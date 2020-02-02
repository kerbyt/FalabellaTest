const resource = 'products';
const controller = require('../controllers/product.controller');
module.exports = ( router) => {
    router.get(`/${resource}/:id`, controller.getObject)
    router.get(`/${resource}`, controller.getObjects)
    router.post(`/${resource}`, controller.saveObject)
    router.put(`/${resource}/:id`, controller.updateObject)
    router.delete(`/${resource}/:id`, controller.deleteObject) 
    return router;
}