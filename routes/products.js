var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")
const validatorHandler = require("../middlewares/validator.handler")
const {createProductSchema,updateProductSchema,getProductSchema} = require("../schemas/product.schema")


/* GET products listing. */
router.get('/',productsController.list);

router.post('/new', validatorHandler(createProductSchema,'body'),productsController.create);

router.get('/detail/:id', validatorHandler(getProductSchema,'params'), productsController.detail);

router.patch('/detail/:id',validatorHandler(getProductSchema,'params'), validatorHandler(updateProductSchema,'body'),productsController.update);

router.delete('/delete/:id', productsController.delete);






module.exports = router;
