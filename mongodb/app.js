const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const MongoClient = require('mongodb');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const books = require('./routes/books');
//const { Mongoose } = require('mongoose');


const app = express();

/*const  MongoClient = require('mongodb');
MongoClient.connect('mongodb://localhost/first',{ useUnifiedTopology: true });
mongoose.connection.on('open', () => {
  console.log("MongoDB: Connected");
});
mongoose.connection.on('error', (err) => {
  console.log("MongoDB: Error", err);
});
*/
/*
MongoClient.connect('mongodb://localhost/udemy',{ useUnifiedTopology: true });
MongoClient.connect('open',()=> {
  console.log("MongoDb Connected");
});
db.on('error', (err) => {
  console.log("MongoDb Error",(err));
});
*/

const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL,{ useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('MongoDB bağlantısı başarıyla gerçekleştirildi.');
  client.close();
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', books);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
