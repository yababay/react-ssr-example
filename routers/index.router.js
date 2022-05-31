const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../views/App');

indexRouter.get('/', (req, res) => {

  const app = React.createElement(App);
  const html = ReactDOMServer.renderToStaticMarkup(app);
  res.write('<!doctype html>');
  res.end(html);

});

module.exports = indexRouter;

