import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import Preloader from "../Preloader/Preloader";
import {DISPLAY} from '../../utils/constants'

function MoviesCardList({
  movies,
  isLoading,
  searchErrorStatus,
  isNotFound,
  handleLikeClick,
  handleMovieDelete,
  savedMovies,
  isSavedMovies,
}) {
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const { pathname } = useLocation();

  function displayCountMovies() {
    if (DISPLAY > 1135) {
      setDisplayedMovies(12);
    } else if (DISPLAY <= 1135) {
      setDisplayedMovies(8);
    } else if (DISPLAY <= 480) {
      setDisplayedMovies(5);
    }
  }

  useEffect(() => {
    displayCountMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", displayCountMovies);
    }, 500);
  });

  function displayMore() {
    if (DISPLAY > 1200) {
      setDisplayedMovies(displayedMovies + 4);
    } else if (DISPLAY <= 1200 && DISPLAY > 1136) {
      setDisplayedMovies(displayedMovies + 3);
    } else if (DISPLAY <= 1136) {
      setDisplayedMovies(displayedMovies + 2);
    }
  }

  function isSavedMovie(savedMovies, movie) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id );
  }

  return (
    <section className="movies-card-list">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError textError={"Ничего не найдено"} />
      )}
      {searchErrorStatus && !isLoading && (
        <SearchError
          textError={`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. \nПодождите немного и попробуйте ещё раз`}
        />
      )}
      {!searchErrorStatus && !isLoading && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <ul className="movies-card-list__list">
              {movies.map((movie) => (
                <MoviesCard
                  key={isSavedMovies ? movie._id : movie.id}
                  isSavedMovie={isSavedMovie(savedMovies, movie)}
                  movies={movies}
                  movie={movie}
                  handleLikeClick={handleLikeClick}
                  handleMovieDelete={handleMovieDelete}
                  isSavedMovies={isSavedMovies}
                  savedMovies={savedMovies}
                />
              ))}
            </ul>
          ) : (
            <ul className="movies-card-list__list">
              {movies.slice(0, displayedMovies).map((movie) => (
                <MoviesCard
                  key={isSavedMovies ? movie._id : movie.id}
                  isSavedMovie={isSavedMovie(savedMovies, movie)}
                  movies={movies}
                  movie={movie}
                  handleLikeClick={handleLikeClick}
                  handleMovieDelete={handleMovieDelete}
                  isSavedMovies={isSavedMovies}
                  savedMovies={savedMovies}
                />
              ))}
            </ul>
          )}
          {movies.length > displayedMovies ? (
            <button
              type="button"
              className="movies-card-list__button"
              onClick={displayMore}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
