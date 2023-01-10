import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'

function Header({ loggedIn }) {
    return (
      <header className="header">
        <NavLink to="/">
          <img src={logo} alt="Логотип" className="header__logo" />
        </NavLink>
        <Navigation loggedIn={loggedIn} />
      </header>
    );
}

export default Header;