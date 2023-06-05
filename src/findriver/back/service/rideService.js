const { createClient } = require("@supabase/supabase-js");
const { Ride } = require("../model/rideModel")
const { supabase } = require("./userService")
const jwt = require('jsonwebtoken')
const env = require("dotenv");

const createRide = async(userId, Ride) => {

    try{
        const { error } = await supabase
            .from('Rides')
            .insert([{
                idUser: userId,
                value: Ride.value,
                kilometerage: Ride.kilometerage,
                application: Ride.application,
                description: Ride.description,
                date: Ride.date
            }])
            .single()
            
        if(error) throw error;

    } catch(error){
        throw error;
    }
}

const getRideByUserId = async(userId) => {
    try{
        const { data, error } = await supabase
            .from("Rides")
            .select("*")
            .eq('idUser', userId)
            .limit(50)

        if(error) throw error;
        if (data != null){
            return data;
        }

    } catch(error){
        throw error;
    }
}

const getRideByRideId = async(Ride) => {
    try{
        const { data, error } = await supabase
            .from("Rides")
            .select("*")
            .eq('idUser', Ride.id)
            .single

        if(error) throw error;
        if (data != null){
            return data;
        }

    } catch(error){
        throw error;
    }
}

const updateRideById = async(Ride) => {
    try{
        const { data, error } = await supabase
            .from("Rides")
            .update({
                value: Ride.value,
                kilometerage: Ride.kilometerage,
                application: Ride.application,
                description: Ride.description,
                date: Ride.date
            })
            .eq("id", Ride.id)
        
        if (error) throw error;

    } catch(error){
        throw error;
    }
    
}

const deleteRideById = async(Ride) => {
    try{
        const { data, error } = await supabase
            .from("Rides")
            .delete()
            .eq("id", Ride.id)
        
        if(error) throw error;

    } catch(error){
        throw error;
    }
}

const getUserIdByToken = (token) => {
    
    if(!token){
        throw new Error('Token de autenticação não fornecido!');
    }

    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        //console.log(decoded.id);
        var userId = decoded.id;
        return userId;

    } catch (error){
        throw new Error('Token de autenticação inválido!');
    }
};

module.exports = { createRide, getRideByUserId, getRideByRideId, updateRideById, deleteRideById, getUserIdByToken }