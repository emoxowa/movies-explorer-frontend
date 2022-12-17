import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function Register() {
  return (
    <div className="register">
      <NavLink to="/">
        <img src={logo} className="register__logo" alt="Logo" />
      </NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__input-title">Имя</label>
        <input className="register__input" required type="text"></input>
        <label className="register__input-title">E-mail</label>
        <input className="register__input" required type="email"></input>
        <label className="register__input-title">Пароль</label>
        <input
          className="register__input register__input_error"
          required
          type="password"
        ></input>
        <span className="login__error">Что-то пошло не так...</span>
      </form>
      <button className="register__button register__button-error">
        Зарегистрироваться
      </button>
      <p className="register__text">
        Уже зарегистрированы?
        <NavLink to="signin" className="register__link link">
          Войти
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
