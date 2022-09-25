const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const authenticateSocial = require("./auhenticate-social");

module.exports = {
    validateBody,
    isValidId,
    authenticate,
    authenticateSocial,
}