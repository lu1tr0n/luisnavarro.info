//   _                                                    _        __       
//  | |_   _(_)___ _ __   __ ___   ____ _ _ __ _ __ ___  (_)_ __  / _| ___  
//  | | | | | / __| '_ \ / _` \ \ / / _` | '__| '__/ _ \ | | '_ \| |_ / _ \ 
//  | | |_| | \__ \ | | | (_| |\ V / (_| | |  | | | (_) || | | | |  _| (_) |
//  |_|\__,_|_|___/_| |_|\__,_| \_/ \__,_|_|  |_|  \___(_)_|_| |_|_|  \___/ 

/*
 *  Programador: Luis Navarro(lu1tr0n)
 *  Sitio: luisnavarro.info
 *  Descripcion: Sitio personal de información academica
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Helmet for security
var helmet = require('helmet');

var routes = require('./routes/routes');

var app = express();

// Seguridad
app.use(helmet());

// Disable header 
app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'views/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views/public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
