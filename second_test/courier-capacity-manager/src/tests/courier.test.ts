import supertest from "supertest";
import { app } from "../app";
import CourrierController from "../controllers/courier.controller";
import CourrierModel from "../models/courier.model";

jest.mock("../connect", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../controllers/courier.controller", () => ({
  __esModule: true,
  default: { CreateCourier: jest.fn() },
}));

jest.mock("../models/courier.model", () => ({
  __esModule: true,
  default: {
    where: jest.fn().mockReturnValue({
      gte: jest
        .fn()
        .mockReturnValue({
          find: jest.fn().mockReturnValue([{ _id: 1, max_capacity: 50 }]),
        }),
    }),
  },
}));

describe("couriers endpoints", () => {
  beforeEach(() => {});

  describe("POST /couriers/", () => {
    test("POST /couriers with correct body should return a 200", async () => {
      const input = { id: 1, max_capacity: 40 };
      const res = await supertest(app)
        .post("/couriers")
        .send(input)
        .expect(200);
      expect(CourrierController.CreateCourier).toHaveBeenCalledWith(input);
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
        .send({ capacity_required: 22 });
      expect(res.statusCode).toEqual(200);
      expect(CourrierModel.where).toHaveBeenCalledWith("max_capacity");
      expect(CourrierModel.where().gte).toHaveBeenCalledWith(22);
      expect(res.body).toEqual([{ _id: 1, max_capacity: 50 }]);
    });
  });
});
