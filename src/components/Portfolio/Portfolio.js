import React from "react";
import "./Portfolio.css";
import arrow from '../../images/icon_arrow.svg'

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a
              className="portfolio__list-link link"
              href="https://emoxowa.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__list-text">Статичный сайт</p>
              <img
                className="portfolio__list-arrow"
                src={arrow}
                alt="Иконка стрела"
              />
            </a>
          </li>
          <li className="portfolio__list-item">
            <a
              className="portfolio__list-link link"
              href="https://emoxowa.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__list-text">Адаптивный сайт</p>
              <img
                className="portfolio__list-arrow"
                src={arrow}
                alt="Иконка стрела"
              />
            </a>
          </li>
          <li className="portfolio__list-item">
            <a
              className="portfolio__list-link link"
              href="https://mesto.yandex.nomoredomains.icu/sign-in"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__list-text">Одностраничное приложение</p>
              <img
                className="portfolio__list-arrow"
                src={arrow}
                alt="Иконка стрела"
              />
            </a>
          </li>
          </ul>
      </div>
    </div>
  );
}

export default Portfolio;
