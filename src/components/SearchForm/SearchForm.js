import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ handleSearchSubmit, isShortMovies, onFilter }) {
  const [query, setQuery] = useState("");
  const [isQueryError, setIsQueryError] = useState(false);
   const location = useLocation();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      handleSearchSubmit(query);
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem("movies")) {
      const userQuery = localStorage.getItem("userQuery");
      setQuery(userQuery);
    }
  }, [location]);
  
  return (
    <section className="search">
      <form noValidate className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-container">
          <input
            type="text"
            name="query"
            placeholder="Фильм"
            className="search-form__input"
            onChange={handleChangeQuery}
            value={query || ""}
            required
          />
          <button className="search-form__button" type="submit" />
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox isShortMovies={isShortMovies} onFilter={onFilter} />
        </div>
      </form>
      {isQueryError && (
        <span className="search-form__error">Нужно ввести ключевое слово</span>
      )}
    </section>
  );
}

export default SearchForm;

