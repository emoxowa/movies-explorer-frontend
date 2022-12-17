import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; 

function Navigation({ loggedIn }) {
  const [menuStatus, setMenuStatus] = React.useState(false);

  function menuButtonClick() {
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  }

  function closeBurgerMenu() {
    setMenuStatus(false);
  }
  

  if (!loggedIn) {
    return (
      <div className="navigation__sign-container">
        <NavLink
          className="navigation__sign-up link"
          to="/signup"
        >
          Регистрация
        </NavLink>
        <NavLink className="navigation__sign-in link" to="/signin">
          <button className="navigation__button">Войти</button>
        </NavLink>
      </div>
    );
  }
  return (
    <div
      className={`
        ${menuStatus ? "navigation__logged-in-container_opened" : ""} `}
    >
      <div
        className={`navigation__logged-in-container ${
          menuStatus ? "" : "disabled"
        } `}
      >
        <div className="navigation__movies-container">
          <NavLink
            to="/"
            className="navigation__main link"
            onClick={closeBurgerMenu}
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName="link_type_active"
            className="navigation__movies link"
            to="/movies"
            onClick={closeBurgerMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="link_type_active"
            className="navigation__saved-movies link"
            to="/saved-movies"
            onClick={closeBurgerMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="navigation__account-container">
          <NavLink
            className="navigation__account link"
            to="/profile"
            onClick={closeBurgerMenu}
          >
            <button className="navigation__button-account">Аккаунт</button>
          </NavLink>
        </div>
      </div>
      <button
        className={`navigation__burger ${
          menuStatus ? "navigation__burger_opened" : ""
        }`}
        onClick={menuButtonClick}
      ></button>
    </div>
  );
}

export default Navigation;

