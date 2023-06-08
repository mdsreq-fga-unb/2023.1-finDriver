const expenseService = require("../service/expenseService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");

async function addExpense(req, res) {
  const expense = req.body;

  try {
    const token = req.headers.authorization;
    const userID = await expenseService.getUserIdByToken(token);
    await expenseService.createExpense(userID, expense);
    res.status(statusCode.CREATED).json({
      message: "Despesa cadastrada com sucesso!",
    });
  } catch (error) {
    res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
}

module.exports = { addExpense };
