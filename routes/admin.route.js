const express = require('express');

const adminRouter = express.Router();

const adminController = require('../controllers/admin.controller');

adminRouter.post('/newproduct', adminController.addProduct);
adminRouter.put('/updateproduct/:id', adminController.updateProduct);
adminRouter.delete('/deleteproduct/:id', adminController.deleteProduct);

module.exports = adminRouter;