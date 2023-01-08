import React, { useEffect } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../useFormWithValidation/useFormWithValidation";
import { EMAIL_REGEX, USER_NAME_REGEX } from "../../utils/constants";

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const buttonClassName = `${
    isValid ? "register__button" : "register__button register__button-error"
  }`;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(
      values.name,
      values.email,
      values.password,
    );
  }
  
  return (
    <main className="register">
      <NavLink to="/">
        <img src={logo} className="register__logo" alt="Logo" />
      </NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__input-title">Имя</label>
        <input
          className="register__input"
          required
          type="text"
          minLength="2"
          maxLength="30"
          pattern={USER_NAME_REGEX}
          value={values.name || ""}
          name="name"
          onChange={handleChange}
        ></input>
        <span className="register__error">{errors.name}</span>
        <label className="register__input-title">E-mail</label>
        <input
          className="register__input"
          required
          type="email"
          pattern={EMAIL_REGEX}
          value={values.email || ""}
          name="email"
          onChange={handleChange}
        ></input>
        <span className="register__error">{errors.email}</span>
        <label className="register__input-title">Пароль</label>
        <input
          className="register__input"
          required
          type="password"
          value={values.password || ""}
          name="password"
          autoComplete="on"
          onChange={handleChange}
        ></input>
        <span className="register__error">{errors.password}</span>
        <button disabled={!isValid} className={buttonClassName} type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <NavLink to="signin" className="register__link link">
          Войти
        </NavLink>
      </p>
    </main>
  );
}

export default Register;
