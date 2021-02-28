var appointment = require("../models/Appointment");
var mongoose = require("mongoose");
var AppointmentFactory = require("../factories/AppointmentFactory");
var mailer = require('nodemailer');

const AppointmentModel = mongoose.model("Appointment", appointment);

class AppointmentService {

  async Create(name, email, description, cpf, date, time){
    var newAppointmentModel = new AppointmentModel({
      name,
      email,
      description,
      cpf,
      date,
      time,
      finished: false,
      notified: false,
      email: false,
    });

    try{
      await newAppointmentModel.save();
      return true;
    }catch(err){
      console.log(err);
      return false;
    }
  }

  async GetAll(showfinished){
    if(showfinished){
      return await AppointmentModel.find();
    }else{
      var appos = await AppointmentModel.find({ 'finished': false });
      var appointments = [];

      appos.forEach(appoitment => {
        if(appoitment.date != undefined){
          appointments.push(AppointmentFactory.Build(appoitment));
        }
      });

      return appointments;
    }
  }

  async GetById(id){
    try{
      var event = await AppointmentModel.findOne({'_id': id});
      return event;
    }catch(err){
      console.log(err);
    }
  }

  async Finish(id){
    try {
      await AppointmentModel.findByIdAndUpdate(id,{
        finished: true
      });
      return true;
    }catch(err){
      console.log(err);
      return false;
    }
  }

  async Search(query){
    try{
      var appos = await AppointmentModel.find().or([{email: query},{cpf: query}]);
      return appos;
    }catch(err){
      console.log(err);
      return[];
    }
  }

  async SendNotification(){
    var appos = await this.GetAll(false);

    var transporter = mailer.createTransport({
      host: "smtp.yourmail.io",
      port: "port",
      auth: {
        user: "youruser",
        pass: "yourpassword",
      }
    });

    appos.forEach(async app => {
      var date = app.start.getTime();
      var hour = 1000 * 60 * 60;
      var gap = date - Date.now();

      if(gap <= hour){
        
        if(!app.notified){
          await AppointmentModel.findByIdAndUpdate(app.id,{notified: true});
          transporter.sendMail({
            from: "Marcelo Ambarc<youremail@mail.com>",
            to: app.email,
            subject: "Sua consulta vai acontecer em breve.",
            text: "Conteúdo qualquer"
          }).then(() => {

          }).catch(err => {
            console.log(err);
          })
        }

      }
    })
  }

}

module.exports = new AppointmentService();