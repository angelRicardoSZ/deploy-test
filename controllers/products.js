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
    detail: async (req,res,next) => {
      try {
        const { id } = req.params;
        const product = await service.findOne(id)
        res.json(product)
      } catch (error) {
        next(error);
      }
      // if(id==="999"){
      //   res.status(404).json({
      //     message:"not found"
      //   })
      // } else {
      //   res.status(200).json({
      //     id,
      //     name:"product",
      //     price:2000
    
      //   })
      // }
    
    },
    update: async function(req,res,next){
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
        next(error)
      }
    },
    delete: async (req,res)=>{
      const {id } = req.params;
      const rta = await service.delete(id);
      res.json(
        rta
      )
    }
}
module.exports = productsController;