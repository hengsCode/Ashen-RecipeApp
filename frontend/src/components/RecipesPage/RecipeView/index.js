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
    const modal = document.querySelector(".recipe-view-content");
    container.style.transform = `translateY(${window.scrollY}px)`;
    modal.style.transform = `translateY(0)`;
    modal.style.opacity = 1;
  }, []);

  const handleClick = (e) => {
    const modal = document.querySelector(".recipe-view-content");
    if (!modal.contains(e.target)) {
      const container = document.querySelector(".recipe-view-container");
      container.style.backgroundColor = "transparent";
      const modal = document.querySelector(".recipe-view-content");
      modal.style.transform = "translateY(-130%)";
      modal.style.opacity = 0.5;
      const body = document.body;
      body.style.overflow = "";
      setTimeout(handleClose, 500);
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
            <RecipeInfo recipe={recipe} />
          </div>
        </div>
        <div className="recipe-view-instructions-container">
          <div className="recipe-view-instructions-content">
            <RecipeIngred ingredients={recipe.ingredients} />
          </div>
          <div className="recipe-view-instructions-content">
            {recipe.methods && <RecipeMethod methods={recipe.methods} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeView;
