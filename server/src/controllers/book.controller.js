const bookService = require('../services/book.service.js')

async function getAllBook(req,res) {
    try {
        let result = await bookService.getAllBook()
        res.send(result);
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
}

async function getOneBook(req,res) {
    try {
        const {id} = req.params
        let result = await bookService.getOneBook(id)
        res.send(result);
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
   
}

async function addBook(req,res) {
    try {
        const data = req.body
        let result = await bookService.addBook(data)
        res.send('Add successfully !!');
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
    
}

async function updateBook(req,res) {
    try {
        const {id} = req.params
        const data = req.body
        let result = await bookService.updateBook(id,data)
        res.send('Update successfully !!');
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
}

async function deleteBook(req,res) {
    try {
        const {id} = req.params
        let result = await bookService.deleteBook(id)
        res.send('Delete successfully !!');
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
}

module.exports = {
    getAllBook,
    getOneBook,
    addBook,
    updateBook,
    deleteBook
}