const { innerJoin } = require("./database");
var database = require("./database");

/* INSERT 
var data = [
  {
    nome: "Red Dead Redemption II",
    preco: 89.90
  },
  {
    nome: "AC: Odyssey",
    preco: 41.40
  },
  {
    nome: "Uncharted 4",
    preco: 24.90
  }
]

var query = database.insert(data).into("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* SELECT
database.select(["nome", "preco"]).table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* NESTED QUERY
database.insert({nome: "Devil May Cry 5", preco: 115}).table("games").then(data => {
  database.select(["nome", "preco"]).table("games").then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });
}).catch(err => {
  console.log(err);
});
*/

/* WHERE
database.select(["nome", "preco"])
  .whereRaw("nome = 'Mist of Noyah' OR preco > 50")
  .table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* RAW
database.raw("SELECT * FROM games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* DELETE
database.where({ id : 3 }).delete().table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
*/

/*  UPDATE
database.where({ id : 7 }).update({preco: 119.90}).table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})*/

/* ORDER BY
database.select().table("games").orderBy("id","desc").then(data =>{
  console.log(data);
}).catch(err => {
  console.log(err);
})*/

/* ASSOCIATED INSERT
database.insert({
  nome: "Ubisoft",
  game_id: 4
}).table("estudios").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})*/

/* INNER JOIN OTO
database.select(["games.*","estudios.nome as estudio_nome"])
  .table("games")
  .innerJoin("estudios","estudios.game_id","games.id")
  .where("games.id",4).then(data => {
    console.log(data)
}).catch(err => {
  console.log(err);
})*/

/* INNER JOIN OTN
database.select(["games.*","estudios.nome as estudio_nome"])
  .table("games")
  .innerJoin("estudios","estudios.game_id","games.id")
  .where("games.id",4).then(data => {
    var game = {
      id:0,
      nome:"",
      estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach(estudio => {
      game.estudios.push({nome: estudio.estudio_nome});
    })
    console.log(game);

}).catch(err => {
   console.log(err);
 })*/

/* INNER JOIN NTN
 database.select([
   "estudios.nome as estudio_nome",
   "games.nome as game_nome",
   "games.preco as preco"
 ])
 .table("games_estudios")
 .innerJoin("games","games.id","games_estudios.game_id")
 .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
 .where("games.id",8)
 .then(data => {
   console.log(data);
 }).catch(err => {
   console.log(err);
 })*/

async function testeTransaction(){

  try{
    await database.transaction(async trans => {
      await database.insert({nome : "Capcom Studio 1"}).table("estudios");

      await database.insert({nome : "Pyxeralia"}).table("estudios");

      await database.insert({nome : "Mojang"}).table("estudios");
    });
  }catch(err){
    console.log(err);
  }
}

testeTransaction();