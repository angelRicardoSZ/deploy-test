const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom")
class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price : parseInt( faker.commerce.price(), 10),
        image:faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })

    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find() {
    // example promise
    // return new Promise((resolve, reject) => {
    //   setTimeout(()=>{
    //     resolve(this.products);
    //   },5000)
    // })
    return this.products;
  }
  async findOne(id){
    // const name = this.getTotal();
    // const index = this.products.findIndex(item => item.id === id )
    const product = this.products.find(item => item.id === id);
    if( !product ) {
      throw boom.notFound("product not found")
    }
    if (product.isBlock) {
      throw boom.conflict("product is block")
    }
    return this.products[index]

  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id )
    if( index === -1 ) {
      throw boom.notFound("product not found")
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index];

  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id )
    if( index === -1 ) {
      throw boom.notFound("product not found")
    }
    this.products.splice(index,1);
    return {id}
  }

}

module.exports = ProductsServices
