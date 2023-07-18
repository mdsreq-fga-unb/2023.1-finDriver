const { createClient } = require("@supabase/supabase-js");
const { supabase } = require("./userService");

const createCar = async (idUser, Car) => {
  try {
    const { error } = await supabase
      .from("Cars")
      .insert([
        {
            idUser: idUser,
            model: Car.model,
            km: Car.km,
            license_plate: Car.license_plate,
            year: Car.year,
            kmPerAlcool: Car.kmPerAlcool,
            kmPerGas: Car.kmPerGas,
            notes: Car.notes

        },
      ])
      .single();

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getCarByUserID = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("Cars")
      .select("*")
      .eq("idUser", userId)

      console.log(data)

    if (error) throw error;
    if (data != null) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const getCarById = async (carId) => {
  try {
    const { data, error } = await supabase
      .from("Cars")
      .select("*")
      .eq("id", carId);

    if (error) throw error;
    if (data != null) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const updateCar = async (Car, carId) => {
  console.log(Car)
  try {
    const { error } = await supabase
      .from("Cars")
      .update({
            model: Car.model,
            mileage: Car.mileage,
            license_plate: Car.license_plate,
            year: Car.year,
            kmPerAlcool: Car.kmPerAlcool,
            kmPerGas: Car.kmPerGas,
            notes: Car.notes
      })
      .eq("id", carId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const deleteCar = async (carId) => {
  try {
    const { data, error } = await supabase
      .from("Cars")
      .delete()
      .eq("id", carId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCar,
  getCarByUserID,
  updateCar,
  deleteCar,
  getCarById
};
