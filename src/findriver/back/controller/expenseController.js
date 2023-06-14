const expenseService = require("../service/expenseService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");
const { getUserIdByToken } = require("../service/tokenService");

async function addExpense(req, res) {
  const expense = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const userID = await getUserIdByToken(token);
    await expenseService.createExpense(userID, expense);
    res
      .status(statusCode.CREATED)
      .json({ message: "Despesa cadastrada com sucesso!" });
  } catch (error) {
    res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

async function getExpenses(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const userId = await getUserIdByToken(token);
    var value = await expenseService.getExpenseByUserID(userId);
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

async function getOneExpense(req, res) {
  const { id } = req.params;

  try {
    let value = await expenseService.getExpenseById(id);
    res.status(statusCode.OK).json({ value });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

async function updateExpense(req, res) {
  const { id } = req.params;
  const ride = req.body;

  try {
    let value = await expenseService.updateExpense(ride, id);
    res
      .status(statusCode.OK)
      .json({ message: "Despesa atualizada com sucesso" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

async function deleteExpense(req, res) {
  const { id } = req.params;

  try {
    await expenseService.deleteExpense(id);
    res.status(statusCode.OK).json({ message: "Corrida excluída com sucesso" });
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

async function getExpenseAverage(req, res) {

  try {
    const token = req.headers.authorization.split(' ')[1];

    const userID = await getUserIdByToken(token);

    let averageExpense = await expenseService.averageExpense(userID);
    let averageDayExpense = await expenseService.averageDayExpense(userID);

    let values = {averageDayExpense, averageExpense}

    res.status(statusCode.OK).json({ values });
  } catch (error) {
    console.log(error)
    res.status(statusCode.NOT_FOUND).json({ message: error.message });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  getOneExpense,
  updateExpense,
  deleteExpense,
  getExpenseAverage
};
