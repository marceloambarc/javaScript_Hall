let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {name: "Mambarc", email: "invest@arcturo.co", password: "123456"};

beforeAll(() => {
  return request.post("/user")
  .send(mainUser)
  .then(res => {})
  .catch(err => {console.log(err)})
})

afterAll(() => {
  return request.delete(`/user/${mainUser.email}`)
  .then(res => {})
  .catch(err => {console.log(err)})
})

describe("User Register",() => {
  test("Must register a user successfully",() => {

    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = {name: "Marcelo", email , password: "1234567"};

    return request.post("/user")
    .send(user)
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.email).toEqual(email);
    }).catch(err => {
      fail(err);
    })

  })

  test("Do not register with empty data",() => {

    let user = {name: "", email: "" , password: ""};

    return request.post("/user")
    .send(user)
    .then(res => {
      expect(res.statusCode).toEqual(400);
    }).catch(err => {
      fail(err);
    })

  })

  test("Do not allow register same e-mail",() => {
    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = {name: "mambarc", email, password: "123456"};

    return request.post("/user")
    .send(user)
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.email).toEqual(email);

      return request.post("/user")
      .send(user)
      .then(res => {

        expect(res.statusCode).toEqual(400)
        expect(res.body.error).toEqual("Email já cadastrado");

      }).catch(err => {
        fail(err);
      })

    }).catch(err => {
      fail(err)
    });

  })

});

describe("Authentication",() => {
  test("Give back token when Log-in",() => {
    return request.post("/auth")
    .send({email: mainUser.email, password: mainUser.password})
    .then(res => {
      expect(res.statusCode).toEqual(200);
      expect(res.body.token).toBeDefined();
    })
    .catch(err => {
      fail(err);
    })
  })

  test("Do not Allow Unregistered Login",() => {
    return request.post("/auth")
    .send({email: "unregistered@gmail.com", password: "unregisteredpassword"})
    .then(res => {
      expect(res.statusCode).toEqual(403);
      expect(res.body.errors.email).toEqual("E-mail não cadastrado");
    })
    .catch(err => {
      fail(err);
    })
  })

  test("Do not Allow wrong password",() => {
    return request.post("/auth")
    .send({email: mainUser.email, password: "unregisteredpassword"})
    .then(res => {
      expect(res.statusCode).toEqual(403);
      expect(res.body.errors.password).toEqual("Senha Incorreta");
    })
    .catch(err => {
      fail(err);
    })
  })

});