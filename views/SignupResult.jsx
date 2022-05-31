import React from 'react'
import SigninForm from './SigninForm'

function SignupSuccess() {
  return (
      <>
          <h1>Регистрация прошла успешно.</h1>
          <p>Вы можете войти в систему с помощью формы:</p>
          <SigninForm />
      </>
  );
}

function SignupError(props) {
  return (
      <h1>{props.error}</h1>
  );
}

module.exports = {SignupSuccess, SignupError};

