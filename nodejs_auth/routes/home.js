const express = require('express');
const homeRouter = express.Router();
const {registerUser,loginUser} = require('../controllers/auth')
const authMiddleWare  = require('../middlewares/auth')

homeRouter.get('/',authMiddleWare,(req,res)=>{
    const {userId,username,role} = req.userInfo;
    res.json({
        message:"Welcome!!",
        user: {
            _id: userId,
            username,
            role,
        }
    })
})

module.exports = homeRouter;