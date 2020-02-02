const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");
const SoldProduct = require("../models/sold-products.model");
const axios = require('axios');

let base = new BaseController();

const saveObject = async (req, res) => {

  let products = await axios.get(`${Urls.baseUrlBD}${Urls.pathAvailableProducts}`);
  products = products.data;

  let exist = false;
  for(let p=0; p < products.length; p++){

    if(parseInt(products[p].id, 10) === parseInt(req.body.productId, 10)){
      exist = true;
    }

  }

  if(exist){

    let soldProduct = new SoldProduct({
      ...req.body,
      createdAt : new Date()
    });
    return base.saveObject(`${Urls.baseUrlBD}${Urls.pathSoldProducts}`, soldProduct, res);

  }else{

    return res.status(404).json({
      ok: false,
      message: 'No existe el producto que quiere vender',
    });

  }

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
