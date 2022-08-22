const getAll = require("./getAll");
const updatebooks = require("./updateBooks");

const updateById = async(id, {title, author}) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    books[index] = {id, title, author};
    await updatebooks(books);
    return books[index];
}

module.exports = updateById;