const router = require('express').Router();
const authorController = require('../controllers/author.controller.js')


router.get('/api/v1/authors', (req, res) => {
    authorController.getAllAuthor(req,res)    
})

router.post('/api/v1/author', (req, res) => {
    authorController.addAuthor(req,res)
});

module.exports = router