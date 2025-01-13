const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    isActive:{
        type:Boolean,
        default:true
    },
    tags:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
},{timestamps:true});

const User = mongoose.model("person",userSchema)

module.exports = User