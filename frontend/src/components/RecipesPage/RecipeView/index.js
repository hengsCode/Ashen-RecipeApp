import { React, useEffect, useState } from "react";
import "./styles.css";
import RecipeInfo from "./RecipeInfo";
import RecipeIngred from "./RecipeIngred";
import RecipeMethod from "./RecipeMethod";
import {
  FavoriteBorder,
  Favorite,
  CheckCircleOutline,
  CheckCircle,
} from "@material-ui/icons";

const RecipeView = (props) => {
  const { recipe, handleClose } = props;
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComplete = () => {
    setStatus(!status);
  };

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

  return (
    <div className="recipe-view-container" onClick={handleClick}>
      <div className="recipe-view-content">
        <RecipeInfo recipe={recipe} />
        <div className="recipe-view-right-content">
          <div className="recipe-view-buttons-container">
            {saved ? (
              <Favorite class="recipe-view-save" onClick={handleSave} />
            ) : (
              <FavoriteBorder class="recipe-view-save" onClick={handleSave} />
            )}
            {status ? (
              <CheckCircle class="recipe-view-start" onClick={handleComplete} />
            ) : (
              <CheckCircleOutline
                class="recipe-view-start"
                onClick={handleComplete}
              />
            )}
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
    </div>
  );
};
export default RecipeView;
