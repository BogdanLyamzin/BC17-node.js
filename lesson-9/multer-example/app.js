const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {nanoid} = require("nanoid");

const app = express();

app.use(cors());
app.use(express.static("public"))

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: multerConfig
})

// upload.fields([{name: "cover", maxCount: 8}, {name: "pdf", maxCount: 1}])
// upload.array("cover", 8)
const books = [];

app.get("/api/books", async(req, res)=> {
    res.json(books)
})

const booksDir = path.join(__dirname, "public", "books");
app.post("/api/books", upload.single("cover"), async(req, res)=> {
    try {
        const {path: tempUpload, originalname} = req.file;
        const resultUpload = path.join(booksDir, originalname);
        await fs.rename(tempUpload, resultUpload);
        const cover = path.join("books", originalname);
        const newBook = {
            id: nanoid,
            title: req.body.title,
            cover,
        };
        books.push(newBook);
        res.status(201).json(newBook)
    } catch (error) {
        await fs.unlink(req.file.path);
    }
})

app.listen(3000);