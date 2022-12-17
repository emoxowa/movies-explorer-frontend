import React from "react";
import "./MoviesCard.css";
import pic_1 from '../../images/pic_1.png';
import pic_2 from '../../images/pic_2.png';
import pic_3 from '../../images/pic_3.png';
import pic_4 from '../../images/pic_4.png';
import pic_5 from '../../images/pic_5.png';
import pic_6 from '../../images/pic_6.png';
import pic_7 from '../../images/pic_7.png';
import pic_8 from '../../images/pic_8.png';
import pic_9 from '../../images/pic_9.png';
import pic_10 from '../../images/pic_10.png';
import pic_11 from '../../images/pic_11.png';
import pic_12 from '../../images/pic_12.png';
import pic_13 from '../../images/pic_13.png';
import pic_14 from '../../images/pic_14.png';
import pic_15 from '../../images/pic_15.png';
import pic_16 from '../../images/pic_16.png';

function MoviesCard() {
  return (
    <>
      <div className="movies-card">
        <img src={pic_1} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <button
            className="movies-card__like-button movies-card__like-button_active movies-card__delete-button"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_2} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Киноальманах «100 лет дизайна»</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_3} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_4} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Баския: Взрыв реальности</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_5} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Бег это свобода</h2>
          <button
            className="movies-card__like-button movies-card__like-button_active"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_6} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Книготорговцы</h2>
          <button
            className="movies-card__like-button movies-card__like-button_active"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_7} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Когда я думаю о Германии ночью</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_8} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">
            Gimme Danger: История Игги и The Stooges
          </h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_9} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">
            Дженис: Маленькая девочка грустит
          </h2>
          <button
            className="movies-card__like-button movies-card__like-button_active"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_10} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Соберись перед прыжком</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_11} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">
            Пи Джей Харви: A dog called money
          </h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_12} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">
            По волнам: Искусство звука в кино
          </h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_13} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Рудбой</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_14} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Скейт — кухня</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_15} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Война искусств</h2>
          <button className="movies-card__like-button" type="button"></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
      <div className="movies-card">
        <img src={pic_16} className="movies-card__image" alt="Изображение" />
        <div className="movies-card__info">
          <h2 className="movies-card__title">Зона</h2>
          <button
            className="movies-card__like-button movies-card__like-button_active"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">1ч 42м</p>
      </div>
    </>
  );
}

export default MoviesCard;