import { React, useEffect } from "react";
import "./styles.css";
import {
  FavoriteBorder,
  Favorite,
  CheckCircleOutline,
  CheckCircle,
} from "@material-ui/icons";

const RecipeView = (props) => {
  const { recipe, handleClose } = props;

  useEffect(() => {
    const container = document.querySelector(".recipe-view-container");
    container.style.transform = `translateY(${window.scrollY}px)`;
    container.style.opacity = 1;
  }, []);

  const handleClick = (e) => {
    const modal = document.querySelector(".recipe-view-content");
    if (!modal.contains(e.target)) {
      const container = document.querySelector(".recipe-view-container");
      container.style.transform = `translateY(-100%)`;
      container.style.opacity = 0;
      setTimeout(handleClose, 300);
    }
  };

  const imageEnlarge = (url) => {
    let indexPosition = url.length - 4;
    const newS = url.slice(0, indexPosition);
    return newS + "-l.jpg";
  };
  const largeImg = imageEnlarge(recipe.img);
  return (
    <div className="recipe-view-container" onClick={handleClick}>
      <div className="recipe-view-content">
        <div className="recipe-view-header-container">
          <div className="recipe-view-header-content">
            <div className="recipe-view-header">{recipe.label}</div>
            <div className="recipe-view-header-buttons-container">
              <div className="recipe-view-header-button">
                <FavoriteBorder class="recipe-view-header-save" />
                Save
              </div>
              <div className="recipe-view-header-button">
                <CheckCircleOutline class="recipe-view-header-start" />
                Start
              </div>
            </div>
          </div>
          <div className="recipe-view-overview-container">
            <div className="recipe-view-overview-content">
              <strong>{recipe.time}min</strong> cook |{" "}
              <strong>{recipe.servings}</strong> serving
              {recipe.servings > 1 ? "s" : ""} |{" "}
              <strong>{recipe.calories.toFixed()}</strong> calories
            </div>
            <div className="recipe-view-overview-button">
              View More Information
            </div>
          </div>
        </div>
        <div className="recipe-view-details-container">
          <img className="recipe-view-img" src={largeImg} alt="" />
          <div className="recipe-view-details">
            <div className="recipe-view-details-header">Recipe Details:</div>
            <div className="recipe-view-details-label">
              Contains:<strong>{` ${recipe.cautions}`}</strong>
            </div>
            <div className="recipe-view-details-label">
              Cuisine:<strong>{` ${recipe.cuisineType}`}</strong>
            </div>
            <div className="recipe-view-details-label">
              Dish Type:<strong>{` ${recipe.dishType}`}</strong>
            </div>
            <div className="recipe-view-details-label">
              Meal Type:<strong>{` ${recipe.mealType}`}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeView;
