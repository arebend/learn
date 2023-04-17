const app = require("../../app");
const supertest = require("supertest");
const db = require("../../models");

describe("create user", () => {
   beforeAll( async ()=> {
      await db.sequelize.sync({force: true});
   })

   it("bad request", async () => {
      await supertest(app)
      .post("/users")
      .expect(400);
   });

   it("success", async () => {
      const payload = {
         "name" : "test name",
         "username" : "username"
      };
      const response = await supertest(app)
      .post("/users")
      .send(payload)
      .expect(200);
      expect(response.body).toMatchObject({
         success: true,
      });
   });

   afterAll(async()=>{
      await db.sequelize.close();
   })
});