require('@babel/register');

const path = require('path');
const express = require('express');
const app = express(); 
const morgan = require('morgan');

const indexRouter = require('./routers/index.router');
const authRouter = require('./routers/auth.router');

const PORT = process.env.PORT ?? 3000;
const publicPath = path.resolve('public');

app.use(morgan('dev'));
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use(express.static(publicPath));

app.listen(PORT, async () => {
  console.log('Веб-сервер слушает порт', PORT);
});

