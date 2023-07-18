const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");

router.post("/adicionar", carController.addCar);
router.get("/ver/", carController.getCar);
router.put("/editar/:id", carController.updateCar);
router.delete("/deletar/:id", carController.deleteCar);
router.get("/ver/:id", carController.getOneCar);

module.exports = router;
