const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../views/App');
const SignUp = require('../views/SignUp');
const SignIn = require('../views/SignIn');

indexRouter.get('/', (_, res) => {
  const app = React.createElement(App);
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

