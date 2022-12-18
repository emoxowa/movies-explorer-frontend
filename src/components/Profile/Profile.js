import React from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <main className="profile">
      <h2 className="profile__title">Привет, Евгения!</h2>
      <form className="profile__form">
        <label className="profile__input-title">
          Имя
          <input
            type="text"
            className="profile__input"
            placeholder="Евгения"
            required
          ></input>
        </label>
        <label className="profile__input-title">
          E-mail
          <input
            type="email"
            className="profile__input"
            placeholder="pivo@yandex.ru"
            required
          ></input>
        </label>
      </form>
      <p className="profile__text">Редактировать</p>
      <NavLink to="/signin" className="profile__link link">
        Выйти из аккаунта
      </NavLink>
    </main>
  );
}

export default Profile;
