require('@babel/register');

const path = require('path');
const express = require('express');
const app = express(); 
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize } = require('./db/models');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const indexRouter = require('./routers/index.router');
const authRouter = require('./routers/auth.router');
const cardsRouter = require('./routers/cards.router');

const PORT = process.env.PORT ?? 3000;
const publicPath = path.resolve('public');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(publicPath));
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/cards', cardsRouter);

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

