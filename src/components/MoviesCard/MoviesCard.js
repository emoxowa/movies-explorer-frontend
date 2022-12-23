import React from "react";
import "./MoviesCard.css";
import { MOVIES_IMAGE_URL } from "../../utils/constants";

function MoviesCard({ movie }) {

  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    
    return `${hours}ч ${minutes}м`;
  }

  return (
    <>
      <li className="movies-card">
        <img
          src={`${MOVIES_IMAGE_URL}${movie.image.url}`}
          className="movies-card__image"
          alt={movie.nameRU}
        />
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <button
            className="movies-card__like-button movies-card__like-button_active movies-card__delete-button"
            type="button"
          ></button>
        </div>
        <p className="movies-card__duration">{convertDuration(movie.duration)}</p>
      </li>
    </>
  );
}

export default MoviesCard;