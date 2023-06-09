/*
const req = require('supertest');
import app from '../server';

beforeEach(() => {
    jest.useFakeTimers();
});

describe('Rotas de users do backend', () => {
    it('POST /api/user/cadastro', async () => {
        const res = await req(app)
            .post('/api/user/cadastro')
            .send({"name": "Radagast",
            "email": "rad@gmail.com",
            "password": "istari",
            "answerOne": "teste",
            "answerTwo": "teste",
            "questionOne": "food",
            "questionTwo": "a"})
            .set('Accept', 'application/json')

        expect(response => {console.log(response)})       
        //expect(res.statusCode).toEqual(500);
    });

    it('GET /api/user/', async () => {
        const res = await req(app).get('/');
        
        expect(res.statusCode).toEqual(200);
    });
});

/*
describe('Rotas de rides do backend', () => {
    it('', () => {

    })
});
*/