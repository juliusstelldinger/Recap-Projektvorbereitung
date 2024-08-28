const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/receipes/all", () => {
  test("Test /all receipe route", async () => {
    const response = await request(app)
      .get("/v1/receipes/all")
      .expect("Content-Type", /json/)
      .expect(200);

    const myReceipes = response.body;
    const myFirstReceipe = myReceipes[0];

    expect(myFirstReceipe.id).toEqual(1);
    expect(myReceipes.length).toBeGreaterThan(0);
  });
});
