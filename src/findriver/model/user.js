import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    //repeat_password: Joi.ref('password'),
    answerOne: Joi.string()
        .alphanum()
        .required(),
    answerTwo: Joi.string()
        .alphanum()
        .required(),
    //car: Joi.string()
      //  .car(),
        //.required(),
  });

export default class UserModel {
    constructor(name, email, password, answerOne, answerTwo, car) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.answerOne = answerOne;
        this.answerTwo = answerTwo;
        //this.car = car;
    }

    validate() {
        const { error } = userSchema.validate(this);
        return error ? error.details[0].message : null;
    }

    async save() {
        const validationError = this.validate();
        if (validationError) {
            console.error("Erro de validação:", validationError)
            return;
        }

        try {
          const db = firebase.firestore();
          await db.collection('users').add({
            name: this.name,
            email: this.email,
            password: this.password,
            answerOne: this.answerOne,
            answerTwo: this.answerTwo,
            //car: this.car
          });
          console.log('Usuário salvo com sucesso!');
        } catch (error) {
          console.error('Erro ao salvar o usuário:', error);
        }
      }

}