const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const googleAuth = require("./googleAuth");
const facebookAuth = require("./facebookAuth");

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    googleAuth,
    facebookAuth,
}