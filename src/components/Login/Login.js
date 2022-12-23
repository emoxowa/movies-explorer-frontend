import React, { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    resetForm();
  }, []);

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(email, password);
  }

  function handleChange(evt) {
    if (evt.target.name === "Email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "Password") {
      setPassword(evt.target.value);
    }
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
          name="Email"
          value={email}
          onChange={handleChange}
        ></input>
        <label className="login__input-title">Пароль</label>
        <input
          className="login__input"
          required
          type="password"
          name="Password"
          value={password}
          onChange={handleChange}
        ></input>
        <button className="login__button" type="submit">Войти</button>
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
