const request = require('supertest')
const app = require('../../app')
const { expect, describe, it } = require('@jest/globals');

describe('GAME API', ()=>{
    it('GET /game-history/list', () =>{
        return request(app)
       .get('/game-history/list')
       .expect(200)
       .then(() => {
        expect.arrayContaining([
            expect.objectContaining({
                id:expect.any(Number),
                game_id:expect.any(Number),
                user_id:expect.any(Number),
                score:expect.any(Number),
                date:expect.any(String),
            })
        ])
       })
    })
    it('GET /game-history/history-user-game/id' , () => {
        return request(app)
        .get('/game-history/history-user-game/1')
        .set('X-Auth-Token', 'xyz123') 
        .then((response) => {
            expect(200)
            expect.objectContaining({response})
        })
    })
    it('POST /game-history/add' , () => {
        return request(app)
        .post('/game-history/add')
        .set('X-Auth-Token', 'xyz123') 
        .send({
            date:'1998-02-21',
            score:1,
            user_id:1,
            game_id:3,
        })
        .then(()=>{
            expect.objectContaining({
                response:expect(200),
                message:expect.any(String)
            })
        })
    })
    it('GET /game-history/history-game/id' , () => {
        return request(app)
        .get('/game-history/history-game/1')
        .expect(200)
        .then((response) => {
            expect.objectContaining({response})
        })
    })
    it('GET /game-history/stats/:id' , () => {
        return request(app)
        .get('/game-history/stats/1')
        .set('X-Auth-Token', 'xyz123') 
        .then(() => {
            expect(200)
            expect.objectContaining({
                gamePlayed:expect.any(Number),
                totalWin:expect.any(Number),
                totalLose:expect.any(Number),
                totalDraw:expect.any(Number)
            })
        })
    })
})