const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");
const axios = require('axios');

let base = new BaseController();


const getSimulation = async (req, res) => {
  try {
    let products = await axios.get(`${Urls.baseUrlBD}${Urls.pathAvailableProducts}`);
    products = products.data;
    let days = req.params.days;
    let simulatedDays = [];
    
    for(let i=0; i <= days; i++){
      let simulatedDaysTemp = {
        day: i,
        products: []
      }
      for(let p=0; p < products.length; p++){
        if(i === 0){
          let product = {
            product: products[p].product,
            sellIn: products[p].sellIn,
            price: products[p].price
          }
          simulatedDaysTemp.products.push(product);
        }
      };
      simulatedDays.push(simulatedDaysTemp);
    }
    
    console.log(simulatedDays);

    return res.status(200).json({
      ok: true,
      message: 'Operación realizada de forma exitosa.',
      data: simulatedDays                   
    });

  } catch (error) {
    return res.status(404).json({
      ok: false,
      message: 'No se encontraron resultados',
    });
  }
}

module.exports = {
  getSimulation
};
