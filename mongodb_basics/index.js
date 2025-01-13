const url  = "mongodb+srv://10ohekabanzai:f22pakfaamcA@cluster0.r08sa.mongodb.net/"
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/models');
const app = express()
app.listen(4002,()=>console.log("App running on port 4002"));

mongoose.connect(url).then(i=>{
    console.log('DB connected')
    runQuery();
});

const runQuery=async()=>{
    try {

        // create
        // const newUser = await User.create({
        //     name:"delete",
        //     email:"delete@gmail.com",
        //     age:20,
        //     isActive:false,
        //     tags:['Frontend','UI','Design']
        // }) 

        // read
        const readUser = await User.find();
        
        // update
        // const updateduser = await User.findByIdAndUpdate('677fb22883ec4ec819064285',{
        //     tags:['Backend','System Design','Cloud']
        // })
        
        // selected fields
        // const selected_fields = await User.find().select('name email -_id');
        
        // sorted users in desc order of Age
        // const sorted = await User.find().sort({age: -1});

        // count documents with status true
        // const count = await User.countDocuments({isActive:true});

        // delete
        // const deletedUser = await User.findByIdAndDelete('677fc0d88e9ae23e6065c4d3');

        // update -other way
        // const updateUser = await User.findByIdAndUpdate('677fb7950f643050e73f75f6',{
        //     $set : {age:29},
        //     $push : {tags: 'Manager'}
        // },{new:true}) 

        console.log(readUser);
    } catch (error) {
        console.log(error)
    }
}

