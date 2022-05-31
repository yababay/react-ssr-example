const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../views/App');
const SignUp = require('../views/SignupForm');
const SignIn = require('../views/SigninForm');

indexRouter.get('/', (req, res) => {
  const user = req.session && req.session.user  
  const app = React.createElement(App, {user});
  const html = ReactDOMServer.renderToStaticMarkup(app);
  res.write('<!doctype html>');
  res.end(html);
});

indexRouter.get('/signup', (_, res) => {
  const signUp = React.createElement(SignUp);
  const html = ReactDOMServer.renderToStaticMarkup(signUp);
  res.end(html);
});

indexRouter.get('/signin', (_, res) => {
  const signIn = React.createElement(SignIn);
  const html = ReactDOMServer.renderToStaticMarkup(signIn);
  res.end(html);
});

module.exports = indexRouter;

