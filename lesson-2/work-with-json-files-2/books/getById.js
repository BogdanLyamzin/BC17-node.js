const getAll = require("./getAll");

const getById = async(id) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    return result || null;
}

module.exports = getById;