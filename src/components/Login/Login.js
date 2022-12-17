import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png'

function Login() {
  return (
    <div className="login">
      <NavLink to="/">
        <img src={logo} className="login__logo" alt="Logo" />
      </NavLink>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__input-title">E-mail</label>
        <input className="login__input" required type="email"></input>
        <label className="login__input-title">Пароль</label>
        <input className="login__input" required type="password"></input>
      </form>
      <button className="login__button">Войти</button>
      <p className="login__text">
        Ещё не зарегистрированы?
        <NavLink to="signup" className="login__link link">
          Регистрация
        </NavLink>
      </p>
    </div>
  );
}

export default Login;

