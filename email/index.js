const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'youremailhere',
    pass: 'yourpasswordhere'
  }
});

transporter.sendMail({
  from: 'Marcelo Mambarc <youremailhere>',
  to: 'marcelo_retro7@hotmail.com',
  subject: 'Oi, sou o Marcelo e estou trabalhando com o nodemailer.',
  text: 'Olá sou o Marcelo e estou gostando bastante da library Nodemailer.',
  html: 'Olá meu nome é Marcelo Barcelo , e eu acho o <a href="https//guiadoprogramador.com">nodemailer</a> muito legal!'
}).then(message => {
  console.log(message);
}).catch(err => {
  console.log(err);
})