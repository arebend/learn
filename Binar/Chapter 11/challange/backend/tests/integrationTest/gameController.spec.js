const request = require('supertest')
const app = require('../../app')
const { expect, describe, it } = require('@jest/globals');

describe('GAME API', ()=>{
    it('GET /games/listTopGame',() =>{
       return request(app)
       .get('/games/list-top-game')
       .expect(200)
       .then(() => {
        expect.arrayContaining([
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                type:expect.any(String),
                difficulty:expect.any(String),
                image:expect.any(String),
                description:expect.any(String),
                isPlayable:expect.any(Boolean)
            })
        ])
       })
    });
    it('GET /games/listGame' , () => {
        return request(app)
       .get('/games/list')
       .expect(200)
       .then(() => {
        expect.arrayContaining([
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                type:expect.any(String),
                difficulty:expect.any(String),
                image:expect.any(String),
                description:expect.any(String),
                isPlayable:expect.any(Boolean)
            })
        ])
       })
    })
    it('POST /games/createGame' , () => {
        request(app)
        .post('/games/add')
        .set('Authorization', 'xyz123') 
        .send({
            name:'Bekel',
            type:'traditional game',
            difficulty:'medium',
            description:'adfdsafasfas',
            isPlayable:true,
            image:'bekel.png'
        })
        .then(() => {
            expect.objectContaining({
                response: expect(200),
                message:expect.any(String)
            })
        })
    })
    it('GET /games/detail/id' , () => {
        return request(app)
        .get('/games/detail/1')
        .expect(200)
        .then(() => {
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                type:expect.any(String),
                difficulty:expect.any(String),
                image:expect.any(String),
                description:expect.any(String),
                isPlayable:expect.any(Boolean)
                })
            })
    })
})