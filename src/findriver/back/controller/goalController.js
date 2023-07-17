const goalService = require("../service/goalService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");
const { getUserIdByToken } = require("../service/tokenService");
const { supabase } = require("../service/userService");

async function addGoal(req, res) {
    const goal = req.body;
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userId = await getUserIdByToken(token);
        
        const existingGoal = await supabase
            .from("Goal")
            .select("*")
            .eq("idUser", userId)
    
        if(existingGoal.data.length > 0){
            res.status(statusCode.ALREADY_EXISTS).json({ error: "Você já possui uma meta cadastrada!"})

        } else{
            await goalService.createGoal(userId, goal);

            res.status(statusCode.CREATED)
                .json({ message: "Meta cadastrada com sucesso!" });
        }
    } catch (error) {
        res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        });
    }
};

async function getGoal(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userId = await getUserIdByToken(token);

        if(!userId) {
            return res.status(401).json({ message: "Token de autenticação inválido" });
        }

        var value = await goalService.getGoalByUserId(userId);
        res.status(statusCode.OK).json({ value });

    } catch (error) {
        res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        });
    }
};

async function updateGoal(req, res) {
    const goal = req.body;
    
    try { 
        const token = req.headers.authorization.split(' ')[1];
        const userId = await getUserIdByToken(token);
        
       await goalService.updateGoal(goal, userId);
        res.status(statusCode.OK).json({ message: "Meta atualizada com sucesso" });

    } catch (error) {
        res.status(statusCode.NOT_FOUND).json({ message: error.message });
    }
};

async function deleteGoal(req, res) { 
    try { 
        const token = req.headers.authorization.split(' ')[1];
        const userId = await getUserIdByToken(token);

        await goalService.deleteGoal(userId);
        res.status(statusCode.OK).json({ message: "Meta excluida com sucesso" });
    } catch (error) {
        res.status(statusCode.NOT_FOUND).json({ message: error.message });
    }
};

module.exports = { addGoal, getGoal, updateGoal, deleteGoal }