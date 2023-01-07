import React from "react";
import "./MoviesCard.css";
import { MOVIES_IMAGE_URL } from "../../utils/constants";

function MoviesCard({
  movie,
  handleLikeClick,
  handleMovieDelete,
  isSavedMovies,
  isSavedMovie,
  savedMovies,
}) {

  function onLikeClick() {
    if (isSavedMovie) {;
      handleMovieDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      handleLikeClick(movie);
    }
  }

  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }

  function onDeleteMovie() {
    handleMovieDelete(movie);
  }


  const movieLikeClassName = `${
    isSavedMovie
      ? "movies-card__like-button movies-card__like-button_active"
      : "movies-card__like-button"
  }`;

  return (
    <>
      <li className="movies-card">
        <img
          src={
            isSavedMovies
              ? movie.image
              : `${MOVIES_IMAGE_URL}${movie.image.url}`
          }
          className="movies-card__image"
          alt={movie.nameRU}
        />
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {isSavedMovies ? (
            <button
              className="movies-card__like-button movies-card__delete-button"
              type="button"
              onClick={onDeleteMovie}
            ></button>
          ) : (
            <button
              className={movieLikeClassName}
              type="button"
              onClick={onLikeClick}
            ></button>
          )}
        </div>
        <p className="movies-card__duration">
          {convertDuration(movie.duration)}
        </p>
      </li>
    </>
  );
}

export default MoviesCard;