let Car = function (id, idUser, year, model, mileage, license_plate, kmPerAlcool, kmPerGas, notes) {
    this.idUser = idUser;
    this.id = id;
    this.model = model;
    this.mileage = mileage;
    this.license_plate = license_plate;
    this.year = year;
    this.kmPerAlcool = kmPerAlcool,
    this.kmPerGas = kmPerGas,
    this.notes = notes
  };
  
  module.exports = { Car };
  