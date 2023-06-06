const express = require("express");
const router = express.Router();
const rideController = require("../controller/rideController");
const { statusCode } = require("../helpers/statusCode")


//router.post("/addCorrida", rideController.addRide);
router.post("/addCorrida", rideController.addRide);
router.get("/verCorridas", rideController.getRides);
//router.put();
//router.delete();

module.exports = router;