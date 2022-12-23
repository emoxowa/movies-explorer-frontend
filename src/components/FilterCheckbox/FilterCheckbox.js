import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isShortMovies, onFilter }) {
  return (
    <label className="filter-checkbox__checkbox-label">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input
        type="checkbox"
        className="filter-checkbox__checkbox"
        checked={isShortMovies}
        onChange={onFilter}
      ></input>
    </label>
  );
}; 

export default FilterCheckbox;
