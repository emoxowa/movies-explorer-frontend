import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <main  className="movies">
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </main>
  );
}

export default Movies;