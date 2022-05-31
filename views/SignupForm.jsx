import React from 'react'

function SignUp() {
  return (
      <>
          <h1>Форма регистрации</h1>
          <form id="signup-form">
              <div className="form-group">
                  <label htmlFor="signup-username">Имя пользователя</label>
                  <input name="username" type="text" className="form-control" id="signup-username" aria-describedby="username-help" placeholder="Введите имя пользователя" />
                  <small id="username-help" className="form-text text-muted">Имя пользователя должно состоять из латинских букв и арабских цифр, начинаться с буквы.</small>
              </div>
              <div className="form-group">
                  <label htmlFor="signup-username">Email пользователя</label>
                  <input name="email" type="email" className="form-control" id="signup-email" aria-describedby="email-help" placeholder="Введите email пользователя" />
                  <small id="email-help" className="form-text text-muted">Email пользователя должен быть правильным.</small>
              </div>
              <div className="form-group">
                  <label htmlFor="signup-password">Пароль</label>
                  <input name="password" type="password" className="form-control" id="signup-password" aria-describedby="password-help" placeholder="Введите пароль" />
                  <small id="password-help" className="form-text text-muted">Имя пользователя должно состоять из латинских букв и арабских цифр, начинаться с буквы.</small>
              </div>
              <p className="text-end">
                  <button type="submit" className="btn btn-primary">Зарегистироваться</button>
              </p>
          </form>
      </>
  );
}

module.exports = SignUp;

