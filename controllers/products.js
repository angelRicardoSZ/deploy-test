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
      
    },
    update: async function(req,res){
      try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id,body);
        res.json(
          {
            product
          }
        )
    
      } catch (error) {
        console.log(error.message)
        res.status(404).json({
          message: error.message
        })
      }
    }
}
module.exports = productsController;