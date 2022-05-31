require('@babel/register');

const path = require('path');
const express = require('express');
const app = express(); 
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const indexRouter = require('./routers/index.router');
const authRouter = require('./routers/auth.router');

const PORT = process.env.PORT ?? 3000;
const publicPath = path.resolve('public');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(publicPath));

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(PORT, async () => {
    console.log('Веб-сервер слушает порт', PORT);
    try {
        await sequelize.authenticate();
        console.log('БД-сервер подключен успешно');
    } catch (error) {
        console.log('БД-сервер не подключен');
        console.log(error.message);
    }
});

