require('@babel/register');
const path = require('path');
const express = require('express');
const app = express(); 
const morgan = require('morgan');

const indexRouter = require('./routers/index.router');

const PORT = process.env.PORT ?? 3000;
const publicPath = path.resolve('public');

app.use(morgan('dev'));
app.use('/', indexRouter);
app.use(express.static(publicPath));

app.listen(PORT, async () => {
  console.log('Веб-сервер слушает порт', PORT);

  /*try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }*/
});


/*
require('@babel/register');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { sequelize } = require('./db/models');
const indexRouter = require('./routers/index.router');
const ponyRouter = require('./routers/pony.router');
const authRouter = require('./routers/auth.router');

const app = express(); // Веб-сервер
const PORT = process.env.PORT ?? 3000;
const publicPath = path.resolve('public');

app.use(express.static(publicPath));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // читать тело запросов в формате urlencoded
app.use(express.json()); // читать тело запросов в формате JSON
app.use(session(
  {
    store: new FileStore(),
    name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
    resave: false, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    },
  },
));
*/

/**
 * GET /users - получить список пользователей (админ-панель)
 * POST /users — регистрация
 */

/*
app.use('/', indexRouter);
app.use('/ponies', ponyRouter);
app.use('/auth', authRouter);
app.get('*', (req, res) => { res.send('Страница не найдена'); });

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
*/
