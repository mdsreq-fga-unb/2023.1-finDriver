let Expense = function (id, idUser, year, make, mileage, license_plate) {
    this.idUser = idUser;
    this.id = id;
    this.make = make;
    this.mileage = mileage;
    this.license_plate = license_plate;
    this.year = year;
  };
  
  module.exports = { Expense };
  