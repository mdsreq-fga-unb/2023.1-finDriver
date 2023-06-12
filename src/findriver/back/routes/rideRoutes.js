const express = require("express");
const router = express.Router();
const rideController = require("../controller/rideController");
const { statusCode } = require("../helpers/statusCode")


router.post("/adicionar", rideController.addRide);
router.get("/ver", rideController.getRides);
router.get("/ver/:id", rideController.getOneRide);
router.get("/kmRodados", rideController.getKmDriveByUserId);
router.get("/mediaLucro", rideController.getAverageProfit);
router.put("/editar/:id", rideController.updateRide);
router.delete("/deletar/:id", rideController.deleteRide);

module.exports = router;