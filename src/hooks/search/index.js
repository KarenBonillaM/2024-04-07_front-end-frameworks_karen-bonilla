import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form className='search-container' onKeyUp={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="search"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  );
}

export default SearchBar;