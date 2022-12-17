import React from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Евгения!</h2>
      <form className="profile__form">
        <label className="profile__input-title">
          Имя
          <input
            type="text"
            className="profile__input"
            placeholder="Евгения"
          ></input>
        </label>
        <label className="profile__input-title">
          E-mail
          <input
            type="email"
            className="profile__input"
            placeholder="pivo@yandex.ru"
          ></input>
        </label>
      </form>
      <p className="profile__text">Редактировать</p>
      <NavLink to="/signin" className="profile__link link">
        Выйти из аккаунта
      </NavLink>
    </div>
  );
}

export default Profile;
