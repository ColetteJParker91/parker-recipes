import React, { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=39ffbf8f18ea41448abf9dfa1abef810&number=9"
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
