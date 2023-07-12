const goalService = require("../service/goalService");
const statusCode = require("../helpers/statusCode");
const jwt = require("jsonwebtoken");
const { getUserByIDToken } = require("../service/tokenService");

async function addGoal(req, res) {
    const goal = req.body;
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userID = await getUserByIDToken(token);
        await goalService.createGoal(userID, goal);

        const existingGoal = await supabase
        .from("Goal")
        .select()
        .eq("idUser", userId);
    
        if(existingGoal.data.length > 0){
            res.status(400).json({ error: "Você já possui uma meta cadastrada!"})
        } 

        res.status(statusCode.CREATED)
            .json({ message: "Meta cadastrada com sucesso!" });
    } catch (error) {
        res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        });
    }
};

async function getGoal(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userID = await getUserByIDToken(token);
        var value = await goalService.getGoalByUserID(userID);
        res.status(statusCode.OK).json({ value });

        if(!userID) {
            return res.status(401).json({ message: "Token de autenticação inválido" });
        }
    } catch (error) {
        res.status(error.status || statusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        });
    }
};

async function updateGoal(req, res) {
    const { id } = req.params;
    const goal = req.body;

    try { 
        let value = await goalService.updateGoal(ride, id);
        res.status(statusCode.OK).json({ message: "Meta atualizada com sucesso" });
    } catch (error) {
        res.status(statusCode.NOT_FOUND).json({ message: error.message });
    }
};

async function deleteGoal(req, res) { 
    const { id } = req.params;

    try { 
        await goalService.deleteGoal(id);
        res.status(statusCode.OK).json({ message: "Meta excluida com sucesso" });
    } catch (error) {
        res.status(statusCode.NOT_FOUND).json({ message: error.message });
    }
};

module.exports = {
    addGoal,
    getGoal,
    updateGoal,
    deleteGoal,
}