let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("The app must response on door 3131",() => {
  return request.get("/").then(res => {
    let status = res.statusCode;
    expect(status).toEqual(200);
  }).catch(err => {
    fail(err);
  });
})