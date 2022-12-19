import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="filter-checkbox__checkbox-label">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input type="checkbox" className="filter-checkbox__checkbox"></input>
    </label>
  );
}; 

export default FilterCheckbox;
