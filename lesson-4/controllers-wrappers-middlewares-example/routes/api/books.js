const express = require("express");

const ctrl = require("../../controllers/books");

const {ctrlWrapper} = require("../../helpers");

const {validateBody} = require("../../middlewares");

const {addSchema} = require("../../schemas/books");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validateBody(addSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;