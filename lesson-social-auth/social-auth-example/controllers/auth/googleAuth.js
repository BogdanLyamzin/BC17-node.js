const jwt = require("jsonwebtoken");

const {User} = require("../../models/user");

const {SECRET_KEY} = process.env;

const googleAuth = async(req, res) => {
    const {_id} = req.user;
    const payload = {
        id: _id,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    await User.findByIdAndUpdate(_id, {token});
    res.json({
        token,
    })
}

module.exports = googleAuth;