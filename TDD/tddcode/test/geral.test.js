let app = require("../src/app")
let supertest = require("supertest");

let request = supertest(app);

test("Response on Port 3131",() => {
  return request.get("/").then(res => expect(res.statusCode).toEqual(200) );
});

test("Return Blue as favourite color",() => {
  return request.get("/color/mambarc").then(res => {
    expect(res.statusCode).toEqual(200);
    expect(res.body.color).toEqual("red");
  });
});