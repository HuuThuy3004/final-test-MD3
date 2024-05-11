const authorService = require('../services/author.service.js')

async function getAllAuthor(req,res) {
    try {
        let result = await authorService.getAllAuthor()
        res.send(result);
    } catch (error) {
        res.status(500).json({
            message: "server error!"
        })
    }
}

async function addAuthor(req,res) {
    try {
        const data = req.body
        let result = await authorService.addAuthor(data)
        res.send('Add author successfully !!');
    } catch (error) {
        res.status(500).json({
            message: `${error}`
        })
    }   
}

module.exports = {
    getAllAuthor,
    addAuthor
}