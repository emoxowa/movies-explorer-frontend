import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as moviesApi from "../../utils/MoviesApi.js";
import { filterMovies, filterDuration } from "../../utils/utils";

function Movies({ loggedIn, handleLikeClick, handleMovieDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchErrorStatus, setSearchErrorStatus] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);

  function handleSearchSubmit(query) {
    const userQuery = query.toLowerCase().trim();

    localStorage.setItem("userQuery", userQuery);
    localStorage.setItem("shortMovies", isShortMovies);

    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        handleFilterMovies(movies, userQuery, isShortMovies);
      })
      .catch(() => setSearchErrorStatus(true))
      .finally(() => setIsLoading(false));
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setFilteredMovies(filterDuration(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  function handleFilterMovies(movies, query, short) {
    const moviesList = filterMovies(movies, query);
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
    if (moviesList.length === 0) {
      setIsNotFound(true);
    }
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialMovies(movies);
      setFilteredMovies(localStorage.getItem("shortMovies") === "true" ? filterDuration(movies) : movies);
      }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
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
          handleLikeClick={handleLikeClick}
          handleMovieDelete={handleMovieDelete}
          isSavedMovies={false}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
