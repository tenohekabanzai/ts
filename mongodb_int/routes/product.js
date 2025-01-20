const express = require('express');
const {insertSampleProducts,getProductStats,getProductAnalysis} = require('../controllers/product');

const productRouter = express.Router();

productRouter.post('/add',insertSampleProducts);
productRouter.get('/get_stats',getProductStats);
productRouter.get('/get_analysis',getProductAnalysis);

module.exports = productRouter;