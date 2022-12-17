import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div id="about-project" className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__text-block">
          <div>
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timeline">
          <p className="about-project__timeline-block_colored">1 неделя</p>
          <p className="about-project__timeline-block">4 недели</p>
          <p className="about-project__timeline-caption">Back-end</p>
          <p className="about-project__timeline-caption">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
