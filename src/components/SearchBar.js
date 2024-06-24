import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, noResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      {noResults && <p className="no-results">No recipie, try something else.</p>}
    </div>
  );
}
export default SearchBar;