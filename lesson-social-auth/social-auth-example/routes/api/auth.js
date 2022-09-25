const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validateBody, authenticate, authenticateSocial} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/google", authenticateSocial.authenticate("google", {scope: ["email", "profile"]}));

router.get("/google/callback", authenticateSocial.authenticate("google", {session: false}), ctrlWrapper(ctrl.googleAuth))

router.get("/facebook", authenticateSocial.authenticate("facebook", {scope: ["email", "public_profile"]}));

router.get("/facebook/callback", authenticateSocial.authenticate("facebook", {session: false}), ctrlWrapper(ctrl.facebookAuth))

module.exports = router;