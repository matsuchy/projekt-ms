import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { searchRecipes } from './api';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (query) => {
    try {
      const results = await searchRecipes(query);
      setRecipes(results);
      setNoResults(results.length === 0);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching recipes.');
      setNoResults(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={handleSearch} noResults={noResults} />
      {error && <p className="error">{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;