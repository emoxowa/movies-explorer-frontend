import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__input"
        />
        <button className="search-form__button" type="submit" />
      </div>
      <div className="search-form__checkbox-container">
        <FilterCheckbox />
      </div>
    </form>
  );
}

export default SearchForm;

