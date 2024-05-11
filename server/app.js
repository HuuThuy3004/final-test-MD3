const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes/book.route.js')
const dotenv = require('dotenv')


dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.use('/' , router)

app.listen(8080, () => {
    console.log(`Server started on 8080`)
})