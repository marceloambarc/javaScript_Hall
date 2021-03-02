let express = require("express");
let app = express();

app.get("/",(req,res) => {
  res.json({seccess: true});
});

app.get("/color/:pessoa", (req,res) => {
  let pessoa = req.params.pessoa;
  if(pessoa == "mambarc"){
    res.json({color: "red"});
  }
})

module.exports = app;