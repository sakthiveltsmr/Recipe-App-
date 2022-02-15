import react, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "538a06d1";
  const APP_KEY = " 8fe1ed6098777e3301511e002ba7bd4d";
  // const exampleReq = `http://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [quere, setQuere] = useState("chicken");

  useEffect(() => {
    // console.log("useEffect will be ready");
    getRecipe();
  }, [quere]);

  const getRecipe = async () => {
    const responce = await fetch(
      `http://api.edamam.com/search?q=${quere}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  //from input
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  //from form
  const updatequere = (e) => {
    e.preventDefault();
    setQuere(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={updatequere} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button
          className="search-button"
          // onClick={() => setCount(count + 1)}
          type="submit"
        >
          search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
