import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { filterMovies, filterDuration } from "../../utils/utils";

function SavedMovies({ loggedIn, savedMovies, handleMovieDelete }) {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchErrorStatus, setSearchErrorStatus] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [userQuery, setUserQuery] = useState("");

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }

  function handleSearchSubmit(query) {
    const userQuery = query.toLowerCase().trim();
    setIsLoading(true);
    setUserQuery(userQuery);
    setIsLoading(false);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, userQuery);
    setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
  }, [savedMovies, userQuery, isShortMovies]);
 

  useEffect(() => {
    if (localStorage.getItem("shortSavedMovies") === "true") {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          onFilter={handleShortMovies}
          isShortMovies={isShortMovies}
        />
        <MoviesCardList
          isLoading={isLoading}
          isNotFound={isNotFound}
          searchErrorStatus={searchErrorStatus}
          isSavedMovies={true}
          movies={filteredMovies}
          savedMovies={savedMovies}
          handleMovieDelete={handleMovieDelete}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
