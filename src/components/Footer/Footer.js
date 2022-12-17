import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__contacts">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item link">
              <a
                className="footer__link link"
                href="https://github.com/emoxowa"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
