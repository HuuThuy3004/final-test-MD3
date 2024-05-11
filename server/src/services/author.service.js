const database = require("../configs/db.config");


async function getAllAuthor() {
    const query = 'SELECT * FROM authors'
    let result = await database.execute(query)
    return result[0]
}

async function addAuthor(data) {
    const {name , biography } = data
    const query = `INSERT INTO authors (name , biography) VALUES( '${name}' , '${biography}')`
    let result = await database.execute(query)
    if (result) {
        return result[0].insertId;
    }
}

module.exports = {
    getAllAuthor,
    addAuthor
}