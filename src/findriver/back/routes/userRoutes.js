const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/cadastro", userController.addUser)

router.get("/", userController.getUser)

module.exports = router;