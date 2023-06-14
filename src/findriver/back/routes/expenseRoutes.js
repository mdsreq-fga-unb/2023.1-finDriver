const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
const { statusCode } = require("../helpers/statusCode");

router.post("/adicionar", expenseController.addExpense);
router.get("/ver", expenseController.getExpenses);
router.get("/ver/:id", expenseController.getOneExpense);
router.get("/mediaDespesa", expenseController.getExpenseAverage);
router.put("/editar/:id", expenseController.updateExpense);
router.delete("/deletar/:id", expenseController.deleteExpense);

module.exports = router;
