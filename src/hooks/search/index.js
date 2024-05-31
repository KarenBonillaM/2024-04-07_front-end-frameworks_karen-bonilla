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
    <form className='search-container flex justify-center' onKeyUp={handleSubmit}>
      <div className="flex justify-between h-14 w-4/5 p-2 border border-gray-300 shadow-md rounded-md shadow-slate-200 lg:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="search w-full p-2 rounded-l-md border-none focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="p-1 bg-blue-600 w-10 rounded-full text-white hover:bg-blue-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
    </form>
  );
}

export default SearchBar;