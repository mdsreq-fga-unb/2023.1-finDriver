const express = require("express")
const router = express.Router()
const goalController = require("../controller/goalController")

router.post("/adicionar", goalController.addGoal)
router.get("/", goalController.getGoal)
router.put("/editar/:id", goalController.updateGoal)
router.delete("/deletar/:id", goalController.deleteGoal)

module.exports = router