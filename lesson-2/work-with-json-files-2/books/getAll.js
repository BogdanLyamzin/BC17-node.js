const fs = require("fs/promises");

const booksPath = require("./booksPath");

const getAll = async() => {
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}

module.exports = getAll;