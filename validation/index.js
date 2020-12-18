const express = require("express");
const app = express();

const session = require("express-session");
const flash = require("express-flash");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("keyboard dog"));
// sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get("/",(req, res) => {
    var emailError = req.flash("emailError");
    var nameError = req.flash("nameError");
    var pointsError = req.flash("pointsError");

    var email = req.flash("email");
    var name = req.flash("name");

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;

    email = (email == undefined || email.length == 0) ? "" : email;
    name = (name == undefined || name.length == 0) ? "" : name;

    res.render("index",{emailError,nameError,pointsError,email: email, name: name});
});

app.post("/form",(req, res) =>{
    var {email, name, points} = req.body;

    var emailError;
    var nameError;
    var pointsError;

    if(email == undefined || email == ""){
        emailError = "email cannot be empty";
    }

    if(name == undefined || name == ""){
        nameError = "name cannot be empty";
    }

    if(points == undefined || points < 20){
        pointsError = "You cannot have less than 20 points"
    }

    if(emailError != undefined || nameError != undefined || pointsError != undefined){
        req.flash("emailError", emailError);
        req.flash("nameError", nameError);
        req.flash("pointsError", pointsError);

        req.flash("email", email);
        req.flash("name", name);

        res.redirect("/");
    }else{
        res.send("SHOW!");
    }
});

app.listen(8080,(req, res) => {
    console.log("Server On!");
});