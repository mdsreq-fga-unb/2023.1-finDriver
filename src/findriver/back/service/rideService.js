const { createClient } = require("@supabase/supabase-js");
const { Ride } = require("../model/rideModel")
const { supabase } = require("./userService/supabase")

const createRide = async(userId, Ride) => {
    try{
        const { data, error } = await supabase
            .from("Rides")
            .insert({
                idUser: userId,
                value: Ride.value,
                kilometerage: Ride.kilometerage,
                application: Ride.application,
                description: Ride.description,
                date: Ride.date
            })
            .single()
            
        if(error) throw error;

    } catch(error){
        alert(error.message);
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
        alert(error.message);
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
        alert(error.message);
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
        alert(error.message);
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
        alert(error.message);
    }
}

module.exports = { createRide, getRideByUserId, getRideByRideId, updateRideById, deleteRideById }