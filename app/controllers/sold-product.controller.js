const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");

let base = new BaseController();

const saveObject = (req, res) => {
  let product = {
    ...req.body,
    createAt : new Date()
  };
  return base.saveObject(`${Urls.baseUrlBD}${Urls.pathSoldProducts}`, product, res);
}

const getObject = (req, res) => {
  let id = req.params.id;
  return base.getObject(`${Urls.baseUrlBD}${Urls.pathSoldProductsById}`, id, res);
}

const updateObject = (req, res) => {
  let id = req.params.id;
  let product = {
    ...req.body,
    updateAt: new Date(),
    id: id
  };
  return base.updateObject(`${Urls.baseUrlBD}${Urls.pathSoldProductsById}`, product, id, res);
}

const getObjects = (req, res) => {
  return base.getObjects(`${Urls.baseUrlBD}${Urls.pathSoldProducts}`, res);
}

const deleteObject = (req, res) => {
  let id = req.params.id;
  return base.deleteObject(`${Urls.baseUrlBD}${Urls.pathSoldProductsById}`, id, res);
}

module.exports = {
  saveObject,
  getObject,
  updateObject,
  getObjects,
  deleteObject
};
