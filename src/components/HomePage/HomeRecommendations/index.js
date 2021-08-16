import { React, useEffect } from "react";
import "./styles.css";
import recipeList from "../../../assets/recipes";
import { useSelector } from "react-redux";

const HomeRecommendations = () => {
  const { scrollY } = useSelector((state) => state.scroll);

  useEffect(() => {
    let vh = document.querySelector(".home-contents-section").clientHeight;
    let container = document.querySelector(".home-recommendations-container");
    if (scrollY < vh / 2) {
      container.style.transform = "translateY(-100vh)";
    } else if (scrollY > vh / 2 && scrollY < vh * 1.5) {
      container.style.transform = "translateY(0)";
    } else {
      container.style.transform = "translateY(100vh)";
    }
  }, [scrollY]);

  return (
    <>
      <div className="home-recommendations-container">
        <div className="home-recommendations-header">
          Recipes you might like...
        </div>
        <div className="home-recommendations-button">
          View all recommendations
        </div>
        <div className="home-recommendations-grid">
          {recipeList.map((recipe, index) => {
            return (
              <div className="recipe-card-container">
                <img className="recipe-card-img" src={recipe.imageURL} alt="" />
                <div className="recipe-card-header">{recipe.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeRecommendations;
