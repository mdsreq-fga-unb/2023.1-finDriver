const { supabase } = require("./userService")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

const createGoal = async (userId, Goal) => {
    try {
        const { error } = await supabase
        .from("Goal")
        .insert([
            {
                idUser: userId,
                name: Goal.name,
                valueCurrent: 0,
                valueGoal: Goal.valueGoal,
                deadline: Goal.deadline,
                inicialDate: new Date().toISOString(),
            },
        ])
        .single();

        if (error) throw error;
    } catch (error) {
        throw error
    }
}

const getGoalByUserId = async (userId) => {
    try {
        const {data, error} = await supabase
            .from("Goal")
            .select("*")
            .eq("idUser", userId);
        
            if(error) throw error;
            if(data != null) {
                return data;
            }
    } catch (error) {
        throw error;
    }
};

const updateGoal = async (Goal, goalId) => {
    try { 
        const {data, error} = await supabase
            .from("Goal")
            .update({
                name: Goal.name,
                valueCurrent: Goal.valueCurrent,
                valueGoal: Goal.goal,
                deadLine: Goal.deadLine,
            })
            .eq("id", goalId);

        if(error) throw error;
    } catch (error) {
        throw error;
    }
};

const deleteGoal = async (goalId) => {
    try {
        const {data, error} = await supabase
            .from("Goal")
            .delete()
            .eq("id", goalId);

        if(error) throw error;
    } catch (error) {
        throw error;
    }
};

module.exports = {createGoal, getGoalByUserId, updateGoal, deleteGoal}