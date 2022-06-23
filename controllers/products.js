const { faker } = require("@faker-js/faker");

let productsController = {
    list: function(req, res) {
      const limit = 100;
      let products = [];
      for (let index = 0; index < limit; index++) {
        products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price : parseInt( faker.commerce.price(), 10),
          image:faker.image.imageUrl(),
        })
      
      ;
      }
      res.json(products)
      // res.render('products')
    },
    create: function(req,res){
      
      const body = req.body;
        // console.log(body)
      const newProduct = {
        id: faker.datatype.uuid(),
        ...body
      }
      // const newProduct = await service.create(body)
      res.status(201).json(
        {
            newProduct
        }
      )
      
    }
}
module.exports = productsController;