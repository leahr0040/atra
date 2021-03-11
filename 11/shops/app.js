//const createError = require('http-errors');
const express = require('express');
const dotenv= require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(process.env.DB_CONNECT,options)
.then(()=>{
  console.log('connected')
})
.catch(err=>{
  console.log('error:' , err);
});
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const indexRouter = require('./controllers/index');
//const usersRouter = require('./controllers/shops');

const router=require('./router');

const app = express();
app.use(router);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

//.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
  //res.render('error');
//});


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`hello I'm lisening to ${port}`);
});

module.exports = app;
