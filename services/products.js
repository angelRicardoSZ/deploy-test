const { faker } = require("@faker-js/faker");

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
    const index = this.products.findIndex(item => item.id === id )
    if( index === -1 ) {
      throw new Error("product not found")
    }
    return this.products[index]

  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id )
    if( index === -1 ) {
      throw new Error("product not found")
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
      throw new Error("product not found")
    }
    this.products.splice(index,1);
    return {id}
  }

}

module.exports = ProductsServices
