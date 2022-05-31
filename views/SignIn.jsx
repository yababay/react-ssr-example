import React from 'react'

function SignIn() {
  return (
      <>
          <h1>Форма входа</h1>
          <form id="signin-form">
              <div className="form-group">
                  <label htmlFor="signup-username">Имя пользователя</label>
                  <input type="text" className="form-control" id="signup-username" aria-describedby="username-help" placeholder="Введите имя пользователя" />
              </div>
              <div className="form-group">
                  <label htmlFor="signup-password">Пароль</label>
                  <input type="password" className="form-control" id="signup-password" aria-describedby="password-help" placeholder="Введите пароль" />
              </div>
              <p className="text-end">
                  <button type="submit" className="btn btn-primary">Войти</button>
              </p>
          </form>
      </>
  );
}

module.exports = SignIn;

