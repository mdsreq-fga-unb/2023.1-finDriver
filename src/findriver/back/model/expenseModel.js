let Expense = function (idUser, cause, value, date, type, description) {
  this.idUser = idUser;
  this.cause = cause;
  this.value = value;
  this.date = date;
  this.type = type;
  this.description = description;
};

module.exports = { Expense };
