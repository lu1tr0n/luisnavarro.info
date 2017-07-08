/*
* Pagina oficial luisnavarro.info
* 
*
 */
var express = require('express');
var router = express.Router();

// Libreria para mandar correo
var nodemailer = require("nodemailer");

// Config file Gmail
// create reusable transport method (opens pool of SMTP connections)
// Access for secure account: https://www.google.com/settings/security/lesssecureapps
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sitio Personal - Luis Navarro' });
});

router.post('/send',function(req,res){

    console.log(req.body);

	// setup e-mail data with unicode symbols
  var mailOptions = {
      from: req.body.email1, // sender address
      to: "", // list of receivers
      subject: "Mensaje de Sitio CV Personal", // Subject line
      text: req.body.message1, // plaintext body
      html: "<b>De </b>"+(req.body.name)+", Correo del Remitente: "+req.body.email1+", mensaje: "+(req.body.message1) // html body
  }

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Mensaje Enviado: " + JSON.stringify(response));
          //res.redirect("http://luisnavarro.info?success=true");
      }

      // if you don't want to use this transport object anymore, uncomment following line
      //smtpTransport.close(); // shut down the connection pool, no more messages
  });
	
});

module.exports = router;
