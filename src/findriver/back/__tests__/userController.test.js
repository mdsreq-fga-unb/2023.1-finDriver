//import { addUser, getUser, updateUser, deleteUser } from '../controller/userController';
//const userService = require("..service/userService");
//import statusCode from '../helpers/statusCode';
const axios = require('axios');

jest.mock('axios');

describe('Funções do userController', () => {
    it('add User', () => {
        const mockGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({
            data: { id: 1, name: 'John Doe' }
        });
      
        expect(mockGetSpy).toHaveBeenCalledWith('http://localhost:3000/api/user/')
    });
    /*
    it('get User', () => {

    });
    it('update User', () => {

    });
    it('delete User', () => {

    });
    */
});


/*
jest.mock('axios');

describe('MyComponent', () => {
  it('should make a GET request with axios', () => {
    const mockGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({
      data: { id: 1, name: 'John Doe' }
    });

    shallow(<MyComponent />);

    expect(mockGetSpy).toHaveBeenCalledWith(
      'https://api.example.com/users'
    );
  });
});
*/