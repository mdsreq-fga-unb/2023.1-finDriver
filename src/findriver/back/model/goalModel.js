let Goal = function (idUser, total, got, deadline, description) {
    this.idUser = idUser;
    this.total = total;
    this.got = got;
    this.deadline = deadline;
    this.description = description;
};
  
module.exports = { Goal };