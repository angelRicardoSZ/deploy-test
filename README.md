# deploy-test
Deployment of an express based app

- This app is deployed on heroku, the app is hosted at: https://deploy-test-jun-2022.herokuapp.com/api/v1/products

Description:

List all products

* Get method

[List](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/)

Response

[
    {
        "id": "52153aef-fe49-48fd-9e76-f038734733fa",
        "name": "Awesome Plastic Gloves",
        "price": 764,
        "image": "https://loremflickr.com/640/480"
    },
    {
        "id": "95d0aecf-00ce-4b9c-93b9-ba260d35a146",
        "name": "Ergonomic Fresh Table",
        "price": 13,
        "image": "https://loremflickr.com/640/480"
    },
    {
        "id": "c2948db4-4c91-4d02-a7d2-5b1a3ad9472f",
        "name": "Small Steel Chicken",
        "price": 49,
        "image": "https://loremflickr.com/640/480"
    },
    {
        "id": "1df41a56-93d9-43e9-94dc-09e276ed5d41",
        "name": "Gorgeous Granite Pizza",
        "price": 719,
        "image": "https://loremflickr.com/640/480"
    }
    
]


* POST method

[Create](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/new) 

parameters: 

Req

{

  "name": "example name",

  "price": 1000,

  "image": "http://url/example"

}

Res

{
    "newProduct": {
        "id": "8ba0642f-c413-4794-858a-aeef2a4f6c1d",
        "name": "asdas",
        "price": 1000,
        "image": "http://asdasd"
    }
}


* PATCH method

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

[Detail](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/detail/)

Request:

https://deploy-test-jun-2022.herokuapp.com/api/v1/products/detail/id

Response:

{

  "id": id,

  "name": "some name",

  "price": 210,

  "image": "https://loremflickr.com/640/480"

}

[Delete](https://deploy-test-jun-2022.herokuapp.com/api/v1/products/delete/id)

Request:

https://deploy-test-jun-2022.herokuapp.com/api/v1/products/delete/id

Response:

{

  "id": id

}

















