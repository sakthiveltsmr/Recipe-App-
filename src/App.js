import react, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  // const APP_ID = "fa6fdf86";
  const APP_ID = "538a06d1";
  // const APP_KEY = "83c74dd3d52d4f1f5af6dbc83bbcbb30";
  const APP_KEY = " 8fe1ed6098777e3301511e002ba7bd4d";
  // const exampleReq = `http://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    // console.log("useEffect will be ready");
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const responce = await fetch(
      `http://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          // onClick={() => setCount(count + 1)}
          type="submit"
        >
          search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
