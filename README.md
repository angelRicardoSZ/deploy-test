# deploy-test
Deployment of an express based app

- This app is deployed on heroku, the app is hosted at: https://deploy-test-jun-2022.herokuapp.com/api/v1/products

Description

[List](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/)

List all products

[Create](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/new) 

parameters: 

Req

{

  "name": "example name",

  "price": 1000,

  "image": "http://url/example"

}

Res

[Partial-Update](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/detail/)

Request: 

{

  "name": "edit-name"

}

Response:

{

  "product": {

​    "id": id,

​    "name": "edit-name",

​    "price": 410,

​    "image": "https://loremflickr.com/640/480"

  }

}

















