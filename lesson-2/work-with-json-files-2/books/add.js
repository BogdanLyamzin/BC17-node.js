const {nanoid} = require("nanoid");

const getAll = require("./getAll");
const updateBooks = require("./updateBooks");

const add = async({title, author}) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        title,
        author,
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

module.exports = add;