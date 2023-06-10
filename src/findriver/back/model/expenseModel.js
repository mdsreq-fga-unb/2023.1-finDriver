let Expense = function (idUser, cause, value, date, type) {
  this.idUser = idUser;
  this.cause = cause;
  this.value = value;
  this.date = date;
  this.type = type;
};

module.exports = { Expense };
