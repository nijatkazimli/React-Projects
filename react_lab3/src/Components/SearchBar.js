import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button className="search-button" onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  );
}

export default SearchBar;
