const express =require('express');
const bookRouter = express.Router();

const {createAuthor,createBook,getBookWithAuhor} = require('../controllers/book');

bookRouter.post('/addAuthor',createAuthor);
bookRouter.post('/addBook',createBook);
bookRouter.get('/getBook/:id',getBookWithAuhor);

module.exports = bookRouter;