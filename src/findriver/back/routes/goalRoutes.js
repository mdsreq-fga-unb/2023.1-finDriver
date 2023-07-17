const express = require("express")
const router = express.Router()
const goalController = require("../controller/goalController")

router.post("/adicionar", goalController.addGoal)
router.get("/", goalController.getGoal)
router.put("/editar", goalController.updateGoal)
router.delete("/deletar", goalController.deleteGoal)

module.exports = router