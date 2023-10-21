import { testApp, connectTestDB, disConnTestDB } from "../testIndex.js";
import { getMe } from "../../src/controller/userController.js";
import User from "../../src/models/userModel.js";

import request from "supertest";

testApp.get("/user/getMe", getMe);
testApp.use((req, res) => {
  req.user = { id: "6533e6b5c522baebf876c802" };
});

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await disConnTestDB();
});

describe("getMe controller", () => {
  it("should return user data", async () => {
    const user = new User({
      _id: "6533e6b5c522baebf876c802",
      fullname: "test user",
      email: "testemail@gmail.com",
      password: "randomPassword",
      roles: "user",
    });
    await user.save();

    const response = await request(testApp).get("/user/getMe");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", user._id.toString());
  });
});
