var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var port =  3000;
const {
  db
} = require('./database/database');

var app = express();
app.use(cors());

var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var commentRouter = require('./routes/comment');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users/', usersRouter);
app.use('/api', require('./Routes/article'));
app.use('/api', require('./Routes/comment'));



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

db.sync().then(() => {
  console.log("database synced");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch(console.error);

module.exports = app;
