const getAll = require("./getAll");
const updatebooks = require("./updateBooks");

const removeById = async(id) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    const [result] = books.splice(index, 1);
    await updatebooks(books);
    return result;
}

module.exports = removeById;