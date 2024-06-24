import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <div className="recipe-details">
        <h3>{recipe.label}</h3>
        <p>{recipe.calories.toFixed(0)} Calories</p>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
      </div>
    </div>
  );
}

export default RecipeCard;
