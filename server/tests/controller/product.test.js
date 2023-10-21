import request from "supertest";
import "dotenv/config";

import { getAllProducts } from "../../src/controller/productController";
import { connectDB, disconnectDB, testApp } from "../testIndex";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

testApp.get("/product/getData", getAllProducts);

describe("getting all products", () => {
  it("should return a status 200 and json array", async () => {
    const response = await request(testApp).get("/product/getData");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
