import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../SearchError/SearchError";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, isLoading, searchErrorStatus, isNotFound }) {
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const display = window.innerWidth;

  function displayCountMovies() {
    if (display > 1135) {
      setDisplayedMovies(12);
    } else if (display <= 1135) {
      setDisplayedMovies(8);
    } else if (display <= 480) {
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
    if (display > 1200) {
      setDisplayedMovies(displayedMovies + 4);
    } else if (display <= 1200 && display > 1136) {
      setDisplayedMovies(displayedMovies + 3);
    } else if (display <= 1136) {
      setDisplayedMovies(displayedMovies + 2);
    } 
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
            <ul className="movies-card-list__list">
              {movies.slice(0, displayedMovies).map((movie) => (
                <MoviesCard key={movie.id} movies={movies} movie={movie} />
              ))}
            </ul>
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
