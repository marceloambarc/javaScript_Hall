const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);

/*UPDATE*/
Article.findByIdAndUpdate("602d70fd2ad08626f46d9183",{
  title: "Vue do Zero",
  author: "Mambarc",
  body: "Vue é uma ferramenta excepcional",
}).then(() => {
  console.log(("Updated"))
}).catch(err => {
  console.log(err);
})

/*DELETE*/
Article.findByIdAndDelete("602d7ab396fa531d804cc509").then(() => {
  console.log("Dado Deletado");
}).catch(err => {
  console.log(err);
})

/* FIND */
Article.find({ '_id': '602d7b35305aec25e8f616bc' }).then(article => {
  console.log(article);
}).catch(err => {
  console.log(err);
});

Article.find({'resume.content': 'ye ye ye'}).then(article => {
  console.log(article);
}).catch(err => {
  console.log(err);
})


/*FIND ALL */
Article.find({}).then(articles => {
  console.log(articles);
}).catch(err => {
  console.log(err);
})


/*cadastro*/
const artigo = new Article({
  title: "C£ do zero", 
  author: "c£k+", 
  body: "venha venha",
  special: false,
  resume: {
    content: "c£",
    author: "omes"
  }
});

artigo.save().then(() => {
  console.log("artigo salvo!");
}).catch(err => {
  console.log(err);
})