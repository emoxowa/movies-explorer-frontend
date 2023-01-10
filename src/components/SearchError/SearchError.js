import React from "react";
import "./SearchError.css";

function SearchError({ textError }) {
  return (
    <div className="search-error">
      <p className="search-error__text">{textError}</p>
    </div>
  );
}

export default SearchError;
