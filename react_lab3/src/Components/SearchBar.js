import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, searchTerm }) {
  const [inputValue, setInputValue] = useState(searchTerm);

  function handleSearchInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSearchClick() {
    onSearch(inputValue);
  }
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={inputValue}
        onChange={handleSearchInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
