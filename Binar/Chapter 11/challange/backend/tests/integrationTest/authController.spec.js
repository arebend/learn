const request = require('supertest')
const app = require('../../app')
const { expect, describe, it,beforeEach } = require('@jest/globals');
describe('AUTH API', () => {
    var token;
    beforeEach(async () => {
        if(!token){
            token = await request(app)
            .post('/users/login')
            .send({
                email:'as1234@gmail.com',
                password:'asd123'
            })
        }
    })
    describe('GET /users --->',() =>{
        it('GET /users with authentication --->',done => {
            request(app)
            .get('/users/whoami')
            .set('Authorization', token.body.accessToken) 
            .then((response) => {
                expect(response.statusCode).toEqual(200)
                expect.objectContaining({
                    id:expect.any(Number),
                    email:expect.any(String)
                    })
                    
                    
                done()
                })
            });
           
        it('GET /users without authentication --->',done => {
            request(app)
            .get('/users/whoami')
            .expect(401)
            .end(function (err) {
                if(err) {
                    return done(err);
                }
                done();
            })
        })
    })
    it('GET /users/detail/id --->', done => {
        request(app)
            .get('/users/detail/1')
            .set('X-Auth-Token', 'xyz123') 
            .then(() => {
                expect.objectContaining({
                    user:{
                        id:expect.any(Number),
                        email:expect.any(String),
                        userId:expect.any(Number),
                        phoneNumber:expect.any(String)
                    }
                })
                done()
                })
    });
    it('POST /users/register --->',done => {
        request(app)
        .post('/users/register')
        .send({
            email:'catherine@gmail.com',
            password:'asdf123'
        }).expect('Content-Type',/json/).expect(200)
        done();
    });
    it('POST /users/login --->',done => {
        request(app)
        .post('/users/login')
        .send({
            email:'as1234@gmail.com',
            password:'asd123'
        })
        .then((response) => {
            expect.objectContaining({
                id:expect.any(Number),
                email:expect.any(String),
                accessToken: expect.any(String),
                response: expect(response.statusCode).toEqual(200),
            }) 
            done();
        })

    });
    it('POST /users/update/id --->', done => {
        request(app)
        .post('/users/update/1')
        .set('Authorization', token.body.accessToken)
        .send({
            firstName:"asd",
            lastName:"dsadas",
            phoneNumber:"0123123213213"
        }).then((response) => {
            expect.objectContaining({
                response:expect(response.statusCode).toEqual(200)
            })
            done()
        }) 

    });
})

