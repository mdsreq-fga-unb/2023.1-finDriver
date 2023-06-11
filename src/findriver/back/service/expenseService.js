const { createClient } = require("@supabase/supabase-js");
const { Expense } = require("../model/expenseModel");
const { supabase } = require("./userService");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

const createExpense = async (userId, Expense) => {
  try {
    const { error } = await supabase
      .from("Expenses")
      .insert([
        {
          idUser: userId,
          cause: Expense.cause,
          value: Expense.value,
          date: Expense.date,
          type: Expense.type,
          description: Expense.description,
        },
      ])
      .single();

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getExpenseByUserID = async (userId) => {
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
    const { data, error } = await supabase
      .from("Expenses")
      .update({
        cause: Expense.cause,
        value: Expense.value,
        date: Expense.date,
        type: Expense.type,
        description: Expense.description,
      })
      .eq("id", expenseId);

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

const averageExpense = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("Expenses")
      .select("id, value, date")
      .eq("idUser", userId);

    const sizeData = data.length;

    var weekValues = [];

    //Calcula quais os dias pertencem à semana com base na data atual (today)

    var today = new Date(Date.now());
    var weekstart = today.getDate() - today.getDay();
    var weekend = weekstart + 6;
    var sunday = new Date(today.setDate(weekstart));
    var saturday = new Date(today.setDate(weekend));

    //Loop que adiciona os valores dos gastos da semana no array weekValues

    for (let i = 0; i < sizeData; i++) {
      var weekDate = new Date(data[i].date.replace(/-/g, "/"));

      if (
        weekDate.toLocaleDateString() >= sunday.toLocaleDateString() &&
        weekDate.toLocaleDateString() <= saturday.toLocaleDateString()
      ) {
        weekValues.push(data[i].value);

      }
    }

    //Loop que soma os valores dos gastos da semana

    var total = 0;

    for (var i = 0; i < weekValues.length; i++) {
      total += weekValues[i];
    }

    var average = total / weekValues.length;

    return average;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createExpense,
  getExpenseById,
  getExpenseByUserID,
  updateExpense,
  deleteExpense,
  updateExpense,
  averageExpense,
};
