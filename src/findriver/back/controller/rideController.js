const rideService = require("../service/rideService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");
const { getUserIdByToken } = require("../service/tokenService");

async function addRide(req, res) {
  const ride = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const userId = await getUserIdByToken(token);
    await rideService.createRide(userId, ride);

    res.status(statusCode.CREATED).json({
      message: "Corrida cadastrada com sucesso!",
    });
  } catch (error) {
    res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
}

async function getRides(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const userId = await getUserIdByToken(token);

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Token de autenticação inválido!" });
    }

    var value = await rideService.getRideByUserId(userId);
    res.status(statusCode.OK).json({ value });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
}

async function getOneRide(req, res) {
  const { id } = req.params;

  try {
    let value = await rideService.getRideByRideId(id);
    res.status(statusCode.OK).json({ value });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
}

async function updateRide(req, res) {
  const { id } = req.params;
  const ride = req.body;

  try {
    let value = await rideService.updateRideById(ride, id);
    res
      .status(statusCode.OK)
      .json({ message: "Corrida atualizada com sucesso!" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
}

async function deleteRide(req, res) {
  const { id } = req.params;

  try {
    await rideService.deleteRideById(id);
    res
      .status(statusCode.OK)
      .json({ message: "Corrida excluida com sucesso!" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
}

async function getKmDriveByUserId(req, res) {

  try {
    const token = req.headers.authorization.split(' ')[1];

    const userID = await getUserIdByToken(token);

    let value = await rideService.kmDrivenInTheDay(userID);

    res.status(statusCode.OK).json({ value });
  } catch (error) {
    console.log(error)
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};
module.exports = { addRide, getRides, getOneRide, updateRide, deleteRide, getKmDriveByUserId };
