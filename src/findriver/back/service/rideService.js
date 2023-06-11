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

const kmDrivenInTheDay = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("Rides")
      .select("id, kilometerage, date")
      .eq("idUser", userId);

    const sizeData = data.length;

    var dayKilometers = [];

    var today = new Date(Date.now());

    for (let i = 0; i < sizeData; i++) {
      var dbDate = new Date(data[i].date.replace(/-/g, '\/'))

      if (today.toLocaleDateString() == dbDate.toLocaleDateString()) {
        dayKilometers.push(data[i].kilometerage);

        //console.log(data[i])
      }
    };

    console.log(dayKilometers)

    var total = 0

    for (var i = 0; i < dayKilometers.length; i++) {
      total += dayKilometers[i];
    };

    return total;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createRide,
  getRideByUserId,
  getRideByRideId,
  updateRideById,
  deleteRideById,
  kmDrivenInTheDay
};
