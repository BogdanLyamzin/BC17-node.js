const express = require("express");

const router = express.Router();

const {APP_URL} = process.env;

router.get("/", (req, res)=> {
    res.send(`<a href="${APP_URL}/api/auth/google">Google login</a><br />
    <a href="${APP_URL}/api/auth/facebook">Facebook login</a>`)
})

module.exports = router;