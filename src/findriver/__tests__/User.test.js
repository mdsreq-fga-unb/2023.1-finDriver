import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Joi from 'joi';

import UserModel from '../model/user.js';

async function testUserModel() {
  // firebase.initializeApp(...);

  // Crie uma instância da classe UserModel com valores válidos
  const user = new UserModel('João', 'joao@example.com', 'aA0', 'cachorro', 'picole');

  // Teste o método validate() (se estiver usando um esquema personalizado)
  const validationError = user.validate();
  if (validationError) {
    console.log('Erro de validação:', validationError);
  } else {
    console.log('Validação bem-sucedida!');
  }

  // Teste o método save() para salvar o usuário no Firebase Firestore
  await user.save();
}

// Chame a função para testar seu modelo
testUserModel();