const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "63288784e6d504dcdafaa088"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const result = jwt.verify(token, SECRET_KEY);
    // console.log(result);
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg4Nzg0ZTZkNTA0ZGNkYWZhYTA4OCIsImlhdCI6MTY2MzYwMTg3OSwiZXhwIjoxNjYzNjA1NDc5fQ.Ma2IvJgU1RG1MRbVlRt7qhtPStnbbRBXCa8ewuiTZMS";
    const result2 = jwt.verify(wrongToken, SECRET_KEY);
} catch (error) {
    console.log(error.message);
}