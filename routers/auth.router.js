const authRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const SignupSuccess = require('../views/SignupSuccess');
const SigninSuccess = require('../views/SigninSuccess');

authRouter.get('/signup', (_, res) => {
  const app = React.createElement(SignupSuccess);
  const html = ReactDOMServer.renderToStaticMarkup(app);
  res.end(html);
});

authRouter.get('/signin', (_, res) => {
  const app = React.createElement(SigninSuccess);
  const html = ReactDOMServer.renderToStaticMarkup(app);
  res.end(html);
});

/*
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
