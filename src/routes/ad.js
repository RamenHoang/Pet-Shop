const express = require('express');
const router = express.Router();

const adController = require('../app/controllers/adController');

//Router orders
router.get('/stored-orders', adController.orders);
router.get('/stored-orders/:id', adController.orderDetail);
router.post('/stored-orders/:id/update', adController.updateOrderDetail);
router.get('/stored-orders/:id/delete', adController.deleteOrder);

//Router products
router.get('/stored-products', adController.storedProduct);
router.get('/stored-products/create', adController.createproduct);
router.post('/stored-products/store', adController.storeproduct);
router.get('/stored-products/:id', adController.editproduct);
router.post('/stored-products/:id/update', adController.updateproduct);
router.get('/stored-products/:id/delete', adController.destroyproduct);

//Router category
router.get('/stored-categories/create', adController.createcategory);
router.post('/stored-categories/store', adController.storecategory);
router.get('/stored-categories', adController.storedcategory);
router.get('/stored-categories/:id', adController.editcategory);
router.post('/stored-categories/:id/update', adController.updatecategory);
router.delete('/stored-categories/:id/delete', adController.destroycategory);

module.exports = router;
