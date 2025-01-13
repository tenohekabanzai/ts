const express = require('express');
const authMiddleWare = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const upload = require('../middlewares/upload');
const uploadimage = require('../controllers/image');
const imageRouter = express.Router();

imageRouter.post('/upload',authMiddleWare,isAdmin,upload.single('file'),uploadimage);
module.exports = imageRouter;
