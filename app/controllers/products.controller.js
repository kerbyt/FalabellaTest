const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");

let base = new BaseController();

const saveObject = (req, res) => {
  let product = {
    ...req.body,
    createAt : new Date()
  };
  console.log(product);
  return base.saveObject(`${Urls.baseUrlBD}${Urls.pathAvailableProducts}`, product, res);
}

const getObject = (req, res) => {
  let id = req.params.id;
  return base.getObject(`${Urls.baseUrlBD}${Urls.pathAvailableProductsbyId}`, id, res);
}

const updateObject = (req, res) => {
  let id = req.params.id;
  let product = {
    ...req.body,
    id: id
  };
  return base.updateObject(`${Urls.baseUrlBD}${Urls.pathAvailableProductsbyId}`, product, id, res);
}

const getObjects = (req, res) => {
  return base.getObjects(`${Urls.baseUrlBD}${Urls.pathAvailableProducts}`, res);
}

const deleteObject = (req, res) => {
  let id = req.params.id;
  return base.deleteObject(`${Urls.baseUrlBD}${Urls.pathAvailableProductsbyId}`, id, res);
}

module.exports = {
  saveObject,
  getObject,
  updateObject,
  getObjects,
  deleteObject
};
