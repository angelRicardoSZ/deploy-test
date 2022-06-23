const { faker } = require("@faker-js/faker");
const ProductsServices = require("../services/products")
const service = new ProductsServices();

let productsController = {
    list: async function(req, res) {
      const products = await service.find()
      res.json(products)
    },
    create: async function(req,res){ 
      const body = req.body;
      const newProduct = await service.create(body)
      res.status(201).json(
      {
        newProduct
      }
      )
      
    }
}
module.exports = productsController;