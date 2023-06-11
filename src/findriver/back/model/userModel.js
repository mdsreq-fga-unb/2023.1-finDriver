let User = function (
  name,
  email,
  password,
  questionOne,
  answerOne,
  questionTwo,
  answerTwo
) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.questionOne = questionOne;
  this.answerOne = answerOne;
  this.questionTwo = questionTwo;
  this.answerTwo = answerTwo;
  //this.car = car;
};

module.exports = User;
