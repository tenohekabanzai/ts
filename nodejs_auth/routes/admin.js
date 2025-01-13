const express = require('express')
const authMiddleWare  = require('../middlewares/auth')
const adminRouter = express.Router();
const isAdmin = require('../middlewares/admin');

adminRouter.get('/',authMiddleWare,isAdmin,(req,res)=>{
    const {userId,username,role} = req.userInfo;
    res.json({
        message:"Welcome to the Admin Page",
        user: {
            _id: userId,
            username,
            role,
        }
    })
});

module.exports = adminRouter;
