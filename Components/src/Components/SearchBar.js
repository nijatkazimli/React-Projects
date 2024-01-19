import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button" onClick={ onSearch }>Search</button>
    </div>
  );
}

export default SearchBar;
