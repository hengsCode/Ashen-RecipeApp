import { React, useEffect, useState } from "react";
import "./styles.css";
import RecipeListView from "../../components/RecipesPage/RecipeListView";

const axios = require("axios");

const Recipes = (props) => {
  const { filter, type } = props.history.location.state;
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/recipes/filtered`, {
          params: {
            filter: filter,
            type: type,
          },
        })
        .then((response) => {
          if (response.data) {
            setRecipeList(response.data);
          } else {
            console.log("ERROR");
          }
        });
      setLoading(false);
    };
    fetch();
  }, [filter, type]);

  return (
    !loading && (
      <div className="recipes-page-content">
        <RecipeListView
          recipeList={recipeList}
          category={type === "search" ? `${filter}` : filter}
        />
      </div>
    )
  );
};

export default Recipes;
