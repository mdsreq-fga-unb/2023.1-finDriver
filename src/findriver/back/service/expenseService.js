const { createClient } = require("@supabase/supabase-js");
const { Expense } = require("../model/expenseModel");
const { supabase } = require("./userService");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

const createExpense = async (userId, Expense) => {
  try {
    const { error } = await supabase.from("Expenses").insert([
      {
        idUser: userId,
        cause: Expense.cause,
        value: Expense.value,
        date: Expense.date,
        type: Expense.type,
      },
    ]).single;

    if (error) throw error;
  } catch (error) {
    console.log("erro");
    throw error;
  }
};

const getExpenseByUserID = async (userID) => {
  try {
    const { data, error } = await supabase
      .from("Expenses")
      .select("*")
      .eq("idUser", userId)
      .limit(50);

    if (error) throw error;
    if (data != null) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const getExpenseById = async (expenseId) => {
  try {
    const { data, error } = await supabase
      .from("Expenses")
      .select("*")
      .eq("id", expenseId);

    if (error) throw error;
    if (data != null) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const updateExpense = async (Expense, expenseId) => {
  try {
    const { data, error } = await supabase.from("Expenses").update({
      cause: Expense.cause,
      value: Expense.value,
      date: Expense.date,
      type: Expense.type,
    });

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const deleteExpense = async (expenseId) => {
  try {
    const { data, error } = await supabase
      .from("Expenses")
      .delete()
      .eq("id", expenseId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getUserIdByToken = (token) => {
  if (!token) {
    throw new Error("Token de autenticação não fornecido!");
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    var userId = decoded.data[0].id;
    return userId;
  } catch (error) {
    throw new Error("Token de autenticação inválido!");
  }
};

module.exports = {
  createExpense,
  getExpenseById,
  getExpenseByUserID,
  updateExpense,
  deleteExpense,
  getUserIdByToken,
};
