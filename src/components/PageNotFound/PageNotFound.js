import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="page-not-found">
      <p className="page-not-found__404">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <NavLink to="/" className="page-not-found__link link">
        Назад
      </NavLink>
    </main>
  );
}

export default PageNotFound;
