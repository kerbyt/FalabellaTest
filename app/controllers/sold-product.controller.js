const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");
const SoldProduct = require("../models/sold-products.model");

let base = new BaseController();

const saveObject = (req, res) => {
  let soldProduct = new SoldProduct({
    ...req.body,
    createdAt : new Date()
  });
  return base.saveObject(`${Urls.baseUrlBD}${Urls.pathSoldProducts}`, soldProduct, res);
}

const getObject = (req, res) => {
  let id = req.params.id;
  return base.getObject(`${Urls.baseUrlBD}${Urls.pathSoldProductsById}`, id, res);
}

const updateObject = (req, res) => {
  let id = req.params.id;
  let soldProduct = new SoldProduct({
    ...req.body,
    updatedAt: new Date(),
    id: id
  });
  return base.updateObject(`${Urls.baseUrlBD}${Urls.pathSoldProductsById}`, soldProduct, id, res);
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
