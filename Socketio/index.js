var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req , res) => {
  res.render("index");
})

io.on("connection",(socket) => {

  socket.on("disconnect", () => {
    console.log("X Desconectou: " + socket.id);
  })

  socket.on("boasvindas", (data) => {
    console.log("Executando evento de Boas-Vindas");
    console.log(data);
  })

  socket.on("palavra", (data) => {
    console.log(data);
    socket.emit("resultado", data + " - MAMBARC!");
  });
});

http.listen(4000,() => {
  console.log("Server On!");
})