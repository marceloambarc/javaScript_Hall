var pdf = require('html-pdf');
var ejs = require('ejs');

var nomeDoUser = 'A';
var curso = 'B';
var categoria = 'C';

ejs.renderFile('./meuarquivo.ejs',{
  nome: nomeDoUser,
  curso: curso,
  categoria: categoria,
},(err, html) => {
  if(err){
    console.log("ERROR",(err));
  }else{
    pdf.create(html,{}).toFile('./meupdf.pdf',(err, res) =>{
      if(err){
        console.log("Um erro ocorreu: "(err));
      }else{
        console.log(res);
      }
    })
  }
});

