const database = require("../configs/db.config");

async function getAllBook() {
    const query = 'SELECT * FROM book'
    let result = await database.execute(query)
    return result[0]
}

async function getOneBook(id) {
    const query = `SELECT * FROM book WHERE id = ${id}`
    let result = await database.execute(query)
    return result[0][0]
}

async function addBook(data) {
    const {name , description , price } = data
    const query = `INSERT INTO book (name , description , price ) VALUES( '${name}' , '${description}' , '${price}' )`
    let result = await database.execute(query)
    if (result) {
        return result[0].insertId;
    }
}

async function updateBook(id,data) {
    const {name , description , price } = data
    const query = `UPDATE book 
                   SET name = '${name}' , description = '${description}' , price = '${price}'  
                   WHERE id = ${id} `
    let result = await database.execute(query)
}

async function deleteBook(id) {
    const query = `DELETE FROM book WHERE id = '${id}'`
    let result = await database.execute(query)
}


module.exports = {
    getAllBook,
    getOneBook,
    addBook,
    updateBook,
    deleteBook
}