const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
const { statusCode } = require("../helpers/statusCode");

router.post("/adicionar", expenseController.addExpense);

module.exports = router;
