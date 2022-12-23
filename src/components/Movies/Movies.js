import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import * as moviesApi from "../../utils/MoviesApi.js";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchErrorStatus, setSearchErrorStatus] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);

  function handleSearchSubmit(query) {
    const userQuery = query.toLowerCase().trim();
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        handleFilterMovies(movies, userQuery, isShortMovies);
      })
      .catch(() => setSearchErrorStatus(true))
      .finally(() => setIsLoading(false))
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }

  function handleFilterMovies(movies, query, short) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
    if (moviesList.length === 0) {
      setIsNotFound(true);
    }
  }

  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration >= 40);
  }

  function filterMovies(movies, query) {
    return movies.filter(
      movie =>
        movie.nameRU.toLowerCase().trim().includes(query) !== false ||
        movie.nameEN.toLowerCase().trim().includes(query) !== false
    );
  }

    return (
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          isShortMovies={isShortMovies}
          onFilter={handleShortMovies}
        />
        <MoviesCardList
          movies={filteredMovies}
          isLoading={isLoading}
          searchErrorStatus={searchErrorStatus}
          isNotFound={isNotFound}
        />
      </main>
    );
  }

export default Movies;
