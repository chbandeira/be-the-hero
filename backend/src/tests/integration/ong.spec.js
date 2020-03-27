const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //set('Authorization', '');
            .send({
                name: "APAD",
                email: "apad@gmail.com",
                whatsapp: "61933334444",
                city: "Sao Paulo",
                uf: "SP"
            });

        expect(response.body).toHaveLength(8);
    });
});