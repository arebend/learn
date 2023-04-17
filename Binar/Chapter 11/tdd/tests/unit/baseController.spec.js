const base = require("../../controllers/baseControllers.js")
const mockRequest = (body = {}) => ({
   body
});
const mockResponse = () => {
   const res = {};
   res.json = jest.fn().mockReturnValue(res);
   res.status = jest.fn().mockReturnValue(res);
   return res;
};

describe("base.index function", () => {
   test("res json return Hello World", done => {
      const req = mockRequest();
      const res = mockResponse();
      base.index(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({
         message: "Hello World"
      });
      done();
   })
});


describe("calculateStats function", () => {
   test("Win", done => {
      const score = [{
         id: 1,
         score: 3
      }, {
         id: 2,
         score: 3
      }]
      const result = base.calculateStats(score)
      expect(result.totalWin).toBe(2)
      expect(result.totalLose).toBe(0)
      expect(result.totalDraw).toBe(0)
      done();
   })

   test("Draw", done => {
      const score = [{
         id: 1,
         score: 0
      }, {
         id: 2,
         score: 0
      }]
      const result = base.calculateStats(score)
      expect(result.totalWin).toBe(0)
      expect(result.totalLose).toBe(0)
      expect(result.totalDraw).toBe(2)
      done();
   })

   test("Lose", done => {
      const score = [{
         id: 1,
         score: -1
      }, {
         id: 2,
         score: -1
      }]
      const result = base.calculateStats(score)
      expect(result.totalWin).toBe(0)
      expect(result.totalLose).toBe(2)
      expect(result.totalDraw).toBe(0)
      done();
   })

   test("determineResult Win", done =>{
      const score = 3
      const res = base.determineResult(score)
      expect(res).toBe("WIN")
      done();
   })

   test("determineResult Lose", done =>{
      const score = -1
      const res = base.determineResult(score)
      expect(res).toBe("LOSE")
      done();
   })

   test("determineResult Draw", done =>{
      const score = 0
      const res = base.determineResult(score)
      expect(res).toBe("DRAW")
      done();
   })

   test("determineResult Undefined", done =>{
      const score = 'aa'
      const res = base.determineResult(score)
      expect(res).toBe("UNDEFINED")
      done();
   })
});