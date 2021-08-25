import { React, useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import RecipeCard from "../../RecipeCard";
const axios = require("axios");

const HomeRecommendations = () => {
  const { scrollY } = useSelector((state) => state.scroll);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    let vh = document.querySelector(".home-contents-section").clientHeight;
    let container = document.querySelector(".home-recommendations-container");
    if (scrollY < vh / 2) {
      container.style.transform = "translateY(-100vh)";
      container.style.opacity = 0;
    } else if (scrollY > vh / 2 && scrollY < vh * 1.5) {
      container.style.transform = "translateY(0)";
      container.style.opacity = 1;
    } else {
      container.style.transform = "translateY(100vh)";
      container.style.opacity = 0;
    }
  }, [scrollY]);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/recipes/all`)
        .then((response) => {
          if (response.data) {
            setRecipeList(response.data);
          } else {
            console.log("Err");
          }
        });
    };
    fetch();
  }, []);

  return (
    <>
      <div className="home-recommendations-container">
        <div className="home-recommendations-header">
          Recipes You Should Try
        </div>
        <div className="home-recommendations-button">
          View all recommendations
        </div>
        <div className="home-recommendations-grid">
          {recipeList.map((recipe, _) => {
            return (
              <div className="recipe-card-container">
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeRecommendations;
