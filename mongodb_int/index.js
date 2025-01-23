const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRouter = require('./routes/product');
const bookRouter = require('./routes/book');
const url  = process.env.mongourl;
const app = express();
app.use(express.json());

mongoose.connect(url).then(i=>{console.log('DB connected')});

app.use('/products',productRouter);
app.use('/books',bookRouter);

app.listen(4001,()=>{
    console.log("App running on PORT 4001")
})