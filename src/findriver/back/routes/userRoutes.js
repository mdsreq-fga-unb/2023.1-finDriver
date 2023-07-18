const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/cadastro", userController.addUser)
router.post("/login", userController.loginUser)
router.get("/", userController.getUser)
router.put("/editar/:id", userController.updateUser)
router.delete("/deletar/:id", userController.deleteUser)

module.exports = router;