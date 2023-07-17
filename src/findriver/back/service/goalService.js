const { supabase } = require("./userService")
const jwt = require("jsonwebtoken")
const env = require("dotenv")

const createGoal = async (userId, Goal) => {
    try {
        console.log(Goal)
        const { error } = await supabase
        .from("Goal")
        .insert([
            {
                idUser: userId,
                valueCurrent: Goal.valueCurrent,
                valueGoal: Goal.valueGoal,
                deadline: Goal.deadline,
                description: Goal.description,
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

const updateGoal = async (Goal, userId) => {
    try { 
        const {error} = await supabase
            .from("Goal")
            .update({
                name: Goal.name,
                valueCurrent: Goal.valueCurrent,
                valueGoal: Goal.valueGoal,
                deadline: Goal.deadline,
            })
            .eq("idUser", userId);

        if(error) throw error;
    } catch (error) {
        throw error;
    }
};

const deleteGoal = async (userId) => {
    try {
        const {error} = await supabase
            .from("Goal")
            .delete()
            .eq("idUser", userId);

        if(error) throw error;
    } catch (error) {
        throw error;
    }
};

module.exports = {createGoal, getGoalByUserId, updateGoal, deleteGoal}