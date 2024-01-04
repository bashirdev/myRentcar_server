// product.routes.js
const express = require('express');

const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controller/productController');
const { CreateUser, userLogin } = require('../controller/userController');

const { createOrder } = require('../controller/orderController');
const { isAdminMiddleware, isUserLoggedInMiddleware } = require('../middleware/middleWare');
const { orderCreateRentalCar, getRentalCarById } = require('../controller/carRentalController');

const router = express.Router();

router.post('/createProduct',isAdminMiddleware, createProduct);
router.get('/getAllProducts', getAllProducts)
router.get('/getProductById/:id', getProductById)


router.post('/createOrder', isUserLoggedInMiddleware, createOrder);
router.post('/orderCreateRentalCar', isUserLoggedInMiddleware, orderCreateRentalCar);


router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

router.post('/createUser', CreateUser)
router.post('/userLogin', userLogin)



module.exports = router;
