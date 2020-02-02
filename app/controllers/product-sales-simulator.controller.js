const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");
const Product = require("../models/products.model");

let base = new BaseController();

const getObjects = (req, res) => {
  return base.getObjects(`${Urls.baseUrlBD}${Urls.pathAvailableProducts}`, res);
}

const getSimulation = (req, res) => {
  let products = getObjects(req, res);
  return products;
}

module.exports = {
  getSimulation
};
