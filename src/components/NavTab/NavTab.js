import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li>
          <a href="#about-project" className="nav-tab__link link">
            <button className="nav-tab__button">О проекте</button>
          </a>
        </li>
        <li>
          <a href="#techs" className="nav-tab__link link">
            <button className="nav-tab__button">Технологии</button>
          </a>
        </li>
        <li>
          <a href="#about-me" className="nav-tab__link link">
            <button className="nav-tab__button">Студент</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;