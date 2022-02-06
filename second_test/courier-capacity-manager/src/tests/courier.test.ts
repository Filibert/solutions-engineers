import supertest from "supertest";
import { app } from "../app";

describe("couriers endpoints", () => {
  describe("POST /couriers/", () => {
    test("POST /couriers with correct body should return a 200", async () => {
      await supertest(app)
        .post("/couriers")
        .send({ id: 1, max_capacity: 40 })
        .expect(200);
    });
    describe("Error handling", () => {
      test("POST /couriers with no body should return a 400", async () => {
        await supertest(app).post("/couriers").expect(400);
      });
      test("POST /couriers with no id should return a 400", async () => {
        await supertest(app)
          .post("/couriers")
          .send({ max_capacity: 40 })
          .expect(400);
      });
      test("POST /couriers with no max_capacity should return a 400", async () => {
        await supertest(app).post("/couriers").send({ id: 40 }).expect(400);
      });
    });
  });

  describe("GET /couriers/lookup", () => {
    test("GET /couriers/lookup with correct body should return a 200", async () => {
      const res = await supertest(app)
        .get("/couriers/lookup")
        .send({ capacity_required: 40 });
      expect(res.statusCode).toEqual(200);
    });
  });
});
