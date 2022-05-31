const authRouter = require('express').Router(); 
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { SignupSuccess, SignupError } = require('../views/SignupResult');
const { SigninSuccess, SigninError } = require('../views/SigninResult');
const bcrypt = require('bcrypt')
const { User } = require('../db/models/index')

const logger = console

authRouter.post('/signup', async (req, res) => {
    const { username, password, email} = req.body
    const emailCheck = await User.findOne({
        where: {
            email,
        },
    });
    if (emailCheck) {
        const app = React.createElement(SignupError, { error: 'Пользователь с таким email уже существует' });
        const html = ReactDOMServer.renderToStaticMarkup(app);
        return res.status(500).send(html);
    }
    const usernameCheck = await User.findOne({
        where: {
            username,
        },
    });
    if (usernameCheck) {
        const app = React.createElement(SignupError, { error: 'Пользователь с таким логином уже существует' });
        const html = ReactDOMServer.renderToStaticMarkup(app);
        return res.status(500).send(html);
    }
    try {
        // Мы не храним пароль в БД, только его хэш
        const saltRounds = Number(process.env.SALT_ROUNDS ?? 10)
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await User.create({
            username,
            password: hashedPassword,
            email
        })
        req.session.user = serializeUser(user)
    } catch (err) {
        logger.error(err)
        return res.end(err)
    }
    const app = React.createElement(SignupSuccess);
    const html = ReactDOMServer.renderToStaticMarkup(app);
    res.end(html);
});

authRouter.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  let user;
  try {
    user = await User.findOne({
      where: {
        username,
      },
    });
  } catch (err) {
    logger.err(err)  
    const app = React.createElement(SignupError, { error: 'Ошибка во время входа.' });
    const html = ReactDOMServer.renderToStaticMarkup(app);
    return res.status(500).send(html);
  }
  if (!user) {
    const app = React.createElement(SignupError, { error: 'Такой пользователь не найден.' });
    const html = ReactDOMServer.renderToStaticMarkup(app);
    return res.status(404).send(html);
  }
  let isSame;
  try {
    isSame = await bcrypt.compare(password, user.password);
  } catch (err) {
    const app = React.createElement(SignupError, { error: 'Ошибка во время входа.' });
    const html = ReactDOMServer.renderToStaticMarkup(app);
    return res.status(500).send(html);
  }
  if (!isSame) {
    const app = React.createElement(SignupError, { error: 'Введены неправильные учетные данные.' });
    const html = ReactDOMServer.renderToStaticMarkup(app);
    return res.status(404).send(html);
  }
  req.session.user = serializeUser(user);
  res.end()
});

function serializeUser(user) {
  const  { id, username } = user;  
  return { id, username }
}

/*
router
  .route('/signup')
  // Страница регистрации пользователя
  .get((req, res) => res.render('signup', { isSignup: true }))
  // Регистрация пользователя
  .post(async (req, res) => {
    const { username, password, email } = req.body
    try {
      // Мы не храним пароль в БД, только его хэш
      const saltRounds = Number(process.env.SALT_ROUNDS ?? 10)
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      const user = await User.create({
        username,
        password: hashedPassword,
        email,
      })
      req.session.user = serializeUser(user)
    } catch (err) {
      logger.error(err)
      return failAuth(res)
    }
    return res.end()
  })
const bcrypt = require('bcrypt');
const LoginPage = require('../views/LoginPage');
const { User } = require('../db/models');
const { USER_NOT_FOUND } = require('../config/variables');


// GET /auth — отдать форму входа
authRouter.get('/', (req, res) => {
  const loginPage = React.createElement(LoginPage);
  const html = ReactDOMServer.renderToStaticMarkup(loginPage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// POST /auth — создать сессию (login, вход)
authRouter.post('/', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: { username: req.body.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: error.message,
      });
  }

  // code guard — early return
  if (!user) {
    res
      .status(404)
      .json({ message: USER_NOT_FOUND });
    return;
  }

  let isSame;
  try {
    isSame = await bcrypt.compare(req.body.password, user.password);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }

  if (!isSame) {
    res
      .status(404)
      .json({ message: USER_NOT_FOUND });
    return;
  }

  req.session.user = user; // Логин, создание (инициализация) сессии
  res.json(isSame); // TODO
});
*/

module.exports = authRouter;
