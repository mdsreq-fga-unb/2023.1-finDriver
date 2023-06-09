const { createClient } = require("@supabase/supabase-js");
const { Ride } = require("../model/rideModel");
const { supabase } = require("./userService");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

const createRide = async (userId, Ride) => {
  try {
    const { error } = await supabase
      .from("Rides")
      .insert([
        {
          idUser: userId,
          value: Ride.value,
          kilometerage: Ride.kilometerage,
          application: Ride.application,
          description: Ride.description,
          date: Ride.date,
        },
      ])
      .single();

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getRideByUserId = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("Rides")
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

const getRideByRideId = async (rideId) => {
  try {
    const { data, error } = await supabase
      .from("Rides")
      .select("*")
      .eq("id", rideId)
      .single();

    if (error) throw error;
    if (data != null) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const updateRideById = async (Ride, rideId) => {
  try {
    const { data, error } = await supabase
      .from("Rides")
      .update({
        value: Ride.value,
        kilometerage: Ride.kilometerage,
        application: Ride.application,
        description: Ride.description,
        date: Ride.date,
      })
      .eq("id", rideId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const deleteRideById = async (rideId) => {
  try {
    const { data, error } = await supabase
      .from("Rides")
      .delete()
      .eq("id", rideId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRide,
  getRideByUserId,
  getRideByRideId,
  updateRideById,
  deleteRideById,
};
