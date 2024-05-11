const router = require('express').Router();
const bookController = require('../controllers/book.controller.js')

router.get('/api/v1/books', (req, res) => {
    bookController.getAllBook(req,res)    
})

router.get('/api/v1/books/:id', (req, res) => {
    bookController.getOneBook(req,res)    
})

router.post('/api/v1/book', (req, res) => {
    bookController.addBook(req,res)
});

router.put('/api/v1/book/:id', (req, res) => {
    bookController.updateBook(req,res)
});

router.delete('/api/v1/book/:id', (req, res) => {
    bookController.deleteBook(req,res)
});

module.exports = router