const dotenv = require('dotenv')
const mysql2 = require('mysql2')
dotenv.config()

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const database = pool.promise()

module.exports = database