import React from 'react'

function SigninSuccess() {
  return (
      <h1>Вход выполнен успешно.</h1>
  );
}

function SigninError(props) {
  return (
      <h1>{props.error}</h1>
  );
}

module.exports = {SigninSuccess, SigninError};

