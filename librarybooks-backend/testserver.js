const request = require('supertest');
const assert = require('assert');
const app = require('./app');

describe('Test server routes', function(){
    describe('"/" root route', function(){
        it('GET method should return JSON response with welcome message', async function(){
            const response = await request(app).get('/');
            assert.strictEqual(response.status, 200);
            assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
            assert.deepStrictEqual(response.body, { message: 'Welcom to librarybooks-backend' });
        });
        const unsupportedMethods = ['post', 'put', 'delete', 'patch'];
        unsupportedMethods.forEach(function(method) {
            it(`should return JSON response with "Unsupported method" message for ${method.toUpperCase()} method request`, async function(){
                const response = await request(app)[method]('/');
                assert.strictEqual(response.status, 405);
                assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
                assert.deepStrictEqual(response.body, { message: 'Unsupported method' });
            });
        })
        it ('HEAD should return JSON response with status 405', async function(){
            const response = await request(app).head('/');
            assert.strictEqual(response.status, 405);
        })
        it ('OPTIONS should return JSON response with status 204', async function(){
            const response = await request(app).options('/');
            assert.strictEqual(response.status, 204);
        })
    })
})