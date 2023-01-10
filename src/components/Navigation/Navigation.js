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
      <nav className="navigation">
        <ul className="navigation__list-sign">
          <li className="navigation__list-item">
            <NavLink className="navigation__sign-up link" to="/signup">
              Регистрация
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink className="navigation__sign-in link" to="/signin">
              <button className="navigation__button">Войти</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav
      className={`
        ${
          menuStatus ? "navigation navigation__logged-in-container_opened" : ""
        } `}
    >
      <ul
        className={`navigation__logged-in-container navigation ${
          menuStatus ? "" : "disabled"
        } `}
      >
        <li className="navigation__list-item">
          <ul className="navigation navigation__movies-container">
            <li className="navigation__list-item">
              <NavLink
                to="/"
                className="navigation__main link"
                onClick={closeBurgerMenu}
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                activeClassName="link_type_active"
                className="navigation__movies link"
                to="/movies"
                onClick={closeBurgerMenu}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                activeClassName="link_type_active"
                className="navigation__saved-movies link"
                to="/saved-movies"
                onClick={closeBurgerMenu}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="navigation__list-item navigation__account-container">
          <NavLink
            className="navigation__account link"
            to="/profile"
            onClick={closeBurgerMenu}
          >
            <button className="navigation__button-account">Аккаунт</button>
          </NavLink>
        </li>
      </ul>
      <button
        className={`navigation__burger ${
          menuStatus ? "navigation__burger_opened" : ""
        }`}
        onClick={menuButtonClick}
      ></button>
    </nav>
  );
}

export default Navigation;

