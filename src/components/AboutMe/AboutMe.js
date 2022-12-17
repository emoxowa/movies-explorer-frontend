import React from "react";
import "./AboutMe.css";
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__info-text">
            <div>
              <h3 className="about-me__info-name">Евгения</h3>
              <p className="about-me__info-title">
                Фронтенд-разработчик, 30 лет
              </p>
              <p className="about-me__info-bio">
                Я из Москвы, закончила факультет тепловой и атомной энергетики
                МЭИ. Я люблю путешествовать, программировать и смотреть сериалы.
                Последние 4 года работала в it-стартапе ассистентом генерального
                директора. Сейчас живу на острове Самуи и изучаю веб-разработку.
              </p>
            </div>
            <div>
              <a
                className="about-me__info-github link"
                href="https://github.com/emoxowa"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <img className="about-me__photo" src={photo} alt="Фотография" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
