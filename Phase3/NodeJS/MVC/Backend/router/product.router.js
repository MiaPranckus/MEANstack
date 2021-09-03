//load the express module
let express = require("express");

//create router reference which helps route to controller function based on the path
let router = express.Router();

//load the controller
let productController = require("../controller/product.controller");

//create the path
router.get("/getAllProductDetails",productController.getAllProductDetails);
router.post("/storeProductInfo",productController.storeProductInfo);
router.delete("/deleteProductInfo/:pid",productController.deleteProductInfo);
router.put("/updateProductInfo",productController.updateProductInfo);
module.exports = router; //export router to be used in another file