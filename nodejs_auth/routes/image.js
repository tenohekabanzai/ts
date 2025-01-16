const express = require('express');
const authMiddleWare = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const upload = require('../middlewares/upload');
const {uploadimage,deleteImage,fetchImages} = require('../controllers/image');
const imageRouter = express.Router();

imageRouter.post('/upload',authMiddleWare,upload.single('file'),uploadimage);
imageRouter.post('/fetch',authMiddleWare,fetchImages);
imageRouter.delete('/deleteImage/:id',authMiddleWare,isAdmin,deleteImage);

module.exports = imageRouter;
