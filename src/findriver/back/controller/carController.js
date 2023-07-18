const carService = require("../service/carService");
const statusCode = require("../helpers/statusCode");
const { getUserIdByToken } = require("../service/tokenService");

async function addCar(req, res) {
  const car = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const idUser = await getUserIdByToken(token);
    await carService.createCar(idUser, car);
    res
      .status(statusCode.CREATED)
      .json({ message: "Carro cadastrado com sucesso!" });
  } catch (error) {
    res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

async function getCar(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const userId = await getUserIdByToken(token);
    var value = await carService.getCarByUserID(userId);
    res.status(statusCode.OK).json({ value });

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Token de autenticação inválido" });
    }
  } catch (error) {
    res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

async function getOneCar(req, res) {
  const { id } = req.params;
  
  try {
    let value = await carService.getCarById(id);
    res.status(statusCode.OK).json({ value });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

async function updateCar(req, res) {
  const { id } = req.params;
  const car = req.body;

  try {
    await carService.updateCar(car, id);
    res
      .status(statusCode.OK)
      .json({ message: "Carro atualizado com sucesso" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

async function deleteCar(req, res) {
  const { id } = req.params;

  try {
    await carService.deleteCar(id);
    res.status(statusCode.OK).json({ message: "Carro excluído com sucesso" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};


module.exports = {
  addCar,
  getCar,
  updateCar,
  deleteCar,
  getOneCar
};
