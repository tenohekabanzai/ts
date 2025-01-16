const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res)=>{

    try {
        const {username,email,password,role} = req.body
        const checkUser = await User.findOne({$or :[{username},{email}]});
        
        if(checkUser){
            res.status(400).json({
                success:false,
                message:"User already exists",
            })
            return;
        }    

        const hashedPassword = await bcrypt.hash(password, 10);
        const resp = await User.create({username,email,password:hashedPassword,role: role || 'user'});
        
        res.json({
            success:true,
            message:"Registered user successfully",
            data: resp
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        })
    }
}

const loginUser = async(req,res)=>{
    try {
        
        const {username,email,password} = req.body
        const resp = await User.findOne({username:username});
        
        if(resp ==  null){
            res.json({
                success:false,
                message:"User does not exist",
            })
            return;
        }
        
        const sp = resp.password;
        const passMatch = await bcrypt.compare(password,sp );

        if(!passMatch){
            res.json({
                success:false,
                message:"Incorrect password",
            })
            return;
        }
        
        const jwtsecret = process.env.JWT_SECRET;
        
        const accessToken = await jwt.sign({
            userId : resp._id,
            username: resp.username,
            role: resp.role
        },jwtsecret,{expiresIn: '30m'})

        res.json({
            success:true,
            message:"Logged in user successfully",
            token:accessToken   
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        })
    }
}

const changePassword = async(req,res)=>{
    try {
        const userId = req.userInfo.userId;

        const {oldPassword,newPassword} = req.body;
        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        // check if old password is correct
        const isMatch = await bcrypt.compare(oldPassword,user.password);
        if(!isMatch){
            return res.status(403).json({
                success:false,
                message:"Incorrect old password"
            })
        }

        // hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updated = await User.findByIdAndUpdate(userId,{password:hashedPassword},{new:true})
        console.log(updated);
        return res.status(200).json({
            success:true,
            message: "Sucessfully changed password",
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            successs:false,
            message: "Server Error occured while changing password"
        })
    }
}

module.exports = {registerUser,loginUser,changePassword};