import React, { useState } from "react";
// import "../styles/SearchBar.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(query);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
