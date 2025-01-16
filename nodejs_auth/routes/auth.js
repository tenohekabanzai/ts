const express = require('express');
const authRouter = express.Router();
const {registerUser,loginUser,changePassword} = require('../controllers/auth')
const authMiddleWare = require('../middlewares/auth');

authRouter.post('/register',registerUser)
authRouter.post('/login',loginUser)
authRouter.post('/changePassword',authMiddleWare,changePassword);

module.exports = authRouter;