import React, { useState, useEffect } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register({ handleRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    resetForm();
  }, []);

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(name, email, password);
  }
  
  function handleChange(evt) {
    if (evt.target.name === "Name") {
      setName(evt.target.value);
    } else if (evt.target.name === "Email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "Password") {
      setPassword(evt.target.value);
    }
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
          value={name}
          name="Name"
          onChange={handleChange}
        ></input>
        <label className="register__input-title">E-mail</label>
        <input
          className="register__input"
          required
          type="email"
          value={email}
          name="Email"
          onChange={handleChange}
        ></input>
        <label className="register__input-title">Пароль</label>
        <input
          className="register__input register__input_error"
          required
          type="password"
          value={password}
          name="Password"
          onChange={handleChange}
        ></input>
        <span className="login__error">Что-то пошло не так...</span>
        <button className="register__button" type="submit">
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
