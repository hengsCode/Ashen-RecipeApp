import { React, useEffect, useState } from "react";
import "./styles.css";
import {
  FavoriteBorder,
  Favorite,
  CheckCircleOutline,
  CheckCircle,
} from "@material-ui/icons";
import RecipeInfo from "./RecipeInfo";
import RecipeIngred from "./RecipeIngred";
import RecipeMethod from "./RecipeMethod";

const RecipeView = (props) => {
  const { recipe, handleClose } = props;
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(false);

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
      const body = document.body;
      body.style.overflow = "";
      setTimeout(handleClose, 300);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComplete = () => {
    setStatus(!status);
  };

  return (
    <div className="recipe-view-container" onClick={handleClick}>
      <div className="recipe-view-content">
        <div className="recipe-view-header-container">
          <div className="recipe-view-header-content">
            <div className="recipe-view-header">{recipe.label}</div>
            <div className="recipe-view-header-buttons-container">
              <div className="recipe-view-header-button" onClick={handleSave}>
                {saved ? (
                  <Favorite class="recipe-view-header-save" />
                ) : (
                  <FavoriteBorder class="recipe-view-header-save" />
                )}
                {saved ? <>Saved</> : <>Save</>}
              </div>
              <div
                className="recipe-view-header-button"
                onClick={handleComplete}
              >
                {status ? (
                  <CheckCircle class="recipe-view-header-start" />
                ) : (
                  <CheckCircleOutline class="recipe-view-header-start" />
                )}
                {status ? <>Done</> : <>Start</>}
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
            <div className="recipe-view-overview-button">More Information</div>
          </div>
        </div>
        <div className="recipe-view-contents-container">
          <RecipeInfo recipe={recipe} />
          <div className="recipe-view-instructions-container">
            <div className="recipe-view-ingredients-container">
              <RecipeIngred ingredients={recipe.ingredients} />
            </div>
            <div className="recipe-view-method-container">
              {recipe.methods && <RecipeMethod methods={recipe.methods} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeView;
