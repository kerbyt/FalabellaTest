
module.exports = (express) => {
    
    class Router extends express.Router {
        constructor() {
          super();      
        }
    
       createRoutes = (resource) => ( controller ) => {
            this.get(`/${resource}/:id`, controller.getObject)
            this.get(`/${resource}`, controller.getObjects)
            this.post(`/${resource}`, controller.saveObject)
            this.put(`/${resource}/:id`, controller.updateObject)
            this.delete(`/${resource}/:id`, controller.deleteObject)
        }
    }
  
    const instance = new Router();

    return instance
}

