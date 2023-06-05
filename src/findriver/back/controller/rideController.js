const rideService = require("../service/rideService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");
const { getUserIdByToken, getRideByUserId } = require("../service/rideService");


async function addRide(req, res) {
    const ride = req.body;

    try{
        const token = req.headers.authorization;
        const userId = await getUserIdByToken(token);
        await rideService.createRide(userId, ride);

        res.status(statusCode.CREATED).json({
            message: 'Corrida cadastrada com sucesso!'
        });

    } catch(error){
        res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message
        });
    }
};

async function getRides(req, res){
    try{
        const token = req.headers.authorization;
        const userId = await getUserIdByToken(token);

        if (!userId) {
            return res.status(401).json({ message: 'Token de autenticação inválido!' });
          }

        var value = await getRideByUserId(userId);
        res.status(statusCode.OK).json({ value });
        res.json({ userId });

    } catch(error){
        res.status(statusCode.NOT_FOUND).json({ message: error.message && "entrei e não foi" });
    }
};

module.exports = { getUserIdByToken, addRide, getRides }