var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")

/* GET products listing. */
router.get('/',productsController.list);

router.post('/new',productsController.create);

router.patch('/detail/:id',productsController.update);






module.exports = router;
