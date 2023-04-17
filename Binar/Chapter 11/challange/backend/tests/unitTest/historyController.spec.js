const history = require('../../controllers/historyController')

const { expect, describe, it } = require('@jest/globals');

describe('UNIT TEST', ()=>{
    it('GET /game-history/history-user-game/id' , () => {
        const calculate = history.calculateHistory([])
        expect(calculate.totalDraw).toBe(0)
        expect(calculate.totalWin).toBe(0)
        expect(calculate.totalDraw).toBe(0)
        expect(calculate.gamePlayed).toBe(0)

    })
})