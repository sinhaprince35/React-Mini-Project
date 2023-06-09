import React, { useState } from 'react';
import axios from 'axios';
import './mealFinder.css'

function MealFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);

  const searchMeals = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="meal-finder">
    <h1 className="heading">Meal Finder App</h1>
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={searchMeals}>
        Search
      </button>
    </div>
    <ol className="meals-list">
      {meals.map((meal) => (
        <li key={meal.idMeal}>{meal.strMeal}</li>
      ))}
    </ol>
  </div>
  );
}

export default MealFinder;