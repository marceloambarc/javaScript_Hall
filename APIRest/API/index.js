const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = require('./private/secret');
const auth = require('./middleware/auth');

app.use(cors());

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id : 23,
            title: "Call of Duty MW",
            year: 2018,
            price: 60
        },
        {
            id : 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        },
        {
            id : 2,
            title: "Minecraft",
            year: 2012,
            price: 30
        }
    ],
    users: [
        {
            id: 1,
            name: "Mambarc",
            email: "invest@arcturo.co",
            password: "nodejs"
        },
        {
            id: 20,
            name: "Marcelo Barcelos",
            email: "marcelo_retro7@hotmail.com",
            password: "123456"
        }
    ]
}

app.get("/games",auth,(req, res) => {
    res.statusCode = 200;
    res.json(DB.games); 
});

app.get("/game/:id",auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var HATEOAS = [
            {
                href: "http://localhost:8080/game"+id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:8080/games",
                method: "GET",
                rel: "get_all_games"
            }
        ]

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json({game,_links:HATEOAS});
        }else{
            res.sendStatus(404);
        }
    }
})

app.post("/game",auth,(req, res) => {
    var {title, price, year} = req.body;
    DB.games.push({
        id: 12,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/game/:id",auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);
        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id",auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            var {title, price, year} = req.body;
            if(title != undefined){
                game.title = title;
            }
            
            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }

            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/auth",(req, res) => {
    var {email, password} = req.body;
    if(email != undefined){
        var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email}, JWTSecret,{expiresIn:'2h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err:"Internal Error"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                })
            }else{
                res.status(401);
                res.json({err: "Invalid Credentials"});
            }
        }else{
            res.status(404);
            res.json({err: "User not Exist"});
        }
    }else{
        res.status(400);
        res.json({err: "Invalid E-mail"});
    }
});

app.listen(8080,() => {
    console.log("API On");
});