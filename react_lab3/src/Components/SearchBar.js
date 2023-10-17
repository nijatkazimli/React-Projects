import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button" onClick={ onSearch }>Search</button>
    </form>
  );
}

export default SearchBar;
