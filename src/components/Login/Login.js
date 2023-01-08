import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../useFormWithValidation/useFormWithValidation";
import { EMAIL_REGEX } from "../../utils/constants";

function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const buttonClassName = `${
    isValid ? "login__button" : "login__button login__button-error"
  }`;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values.email, values.password);
  }

  return (
    <main className="login">
      <NavLink to="/">
        <img src={logo} className="login__logo" alt="Logo" />
      </NavLink>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__input-title">E-mail</label>
        <input
          className="login__input"
          required
          type="email"
          name="email"
          pattern={EMAIL_REGEX}
          value={values.email || ""}
          onChange={handleChange}
        ></input>
        <span className="login__error">{errors.email}</span>
        <label className="login__input-title">Пароль</label>
        <input
          className="login__input"
          required
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        ></input>
        <span className="login__error">{errors.password}</span>
        <button disabled={!isValid} className={buttonClassName} type="submit">
          Войти
        </button>
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?
        <NavLink to="signup" className="login__link link">
          Регистрация
        </NavLink>
      </p>
    </main>
  );
}

export default Login;
