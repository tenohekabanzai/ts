const Author = require('../models/Author')
const Book = require('../models/Books')

const createAuthor = async(req,res)=>{
    try {
        const {name,bio} = req.body;
        const resp = await Author.create({
            name: name,
            bio:bio
        })
        res.status(201).json({
            success:true,
            message:"Author added",
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message:"Server Error",
            
        })
    }
}

const createBook = async(req,res)=>{
    try {
        const {title,author} = req.body;
        const resp = await Book.create({
            title:title,
            author:author
        })
        res.status(201).json({
            success:true,
            message:"Book added",
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message:"Server Error"
        })
    }
}

const getBookWithAuhor = async(req,res)=>{
    try {
        // console.log(req.params.id)
        const book = await Book.findById(req.params.id).populate('author');
        if(!book)
        res.status(404).json({
            success:false,
            message:"Book not found!!"
        })
        res.status(200).json({
            success: true,
            data: book
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Server Error"
        })
    }
}

module.exports = {createAuthor,createBook,getBookWithAuhor};