const BaseController = require("./base.controller");
const Urls = require("../config/configUrl");
const axios = require('axios');

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

        }else{

          if(products[p].product === "Full cobertura"){

            products[p].sellIn = products[p].sellIn-1;
            products[p].price = products[p].price >= 100 ? products[p].price : products[p].price+1;
            
            let product = {
              product: products[p].product,
              sellIn: products[p].sellIn,
              price: products[p].price
            }

            simulatedDaysTemp.products.push(product);

          }else if(products[p].product === "Mega cobertura"){

            products[p].sellIn = products[p].sellIn === 1 ? products[p].sellIn : products[p].sellIn-1;
            products[p].price = 180;
            
            let product = {
              product: products[p].product,
              sellIn: products[p].sellIn,
              price: products[p].price
            }

            simulatedDaysTemp.products.push(product);
  
          }else if(products[p].product === "Full cobertura Super duper"){

            products[p].sellIn = products[p].sellIn-1;
            if(products[p].sellIn <= 0){
              products[p].price = 0;
            }else if(products[p].sellIn <= 10 && products[p].sellIn > 5){
              products[p].price = products[p].price >= 100 ? products[p].price : products[p].price+2;
            }else if(products[p].sellIn <= 5){
              products[p].price = products[p].price >= 100 ? products[p].price : products[p].price+3;
            }else{
              products[p].price = products[p].price >= 100 ? products[p].price : products[p].price+1;
            }
            
            let product = {
              product: products[p].product,
              sellIn: products[p].sellIn,
              price: products[p].price
            }

            simulatedDaysTemp.products.push(product);
  
          }else if(products[p].product === "Super avance"){

            products[p].sellIn = products[p].sellIn-1;
            let priceTemp = products[p].sellIn < 0 ? products[p].price-4 : products[p].price-2;
            products[p].price = priceTemp <=0 ? products[p].price : priceTemp;
            
            let product = {
              product: products[p].product,
              sellIn: products[p].sellIn,
              price: products[p].price
            }

            simulatedDaysTemp.products.push(product);
  
          }else{

            products[p].sellIn = products[p].sellIn-1;
            let priceTemp = products[p].sellIn < 0 ? products[p].price-2 : products[p].price-1;
            products[p].price = priceTemp <=0 ? products[p].price : priceTemp;
            
            let product = {
              product: products[p].product,
              sellIn: products[p].sellIn,
              price: products[p].price
            }

            simulatedDaysTemp.products.push(product);

          }

        }
      };

      simulatedDays.push(simulatedDaysTemp);

    }
    
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
