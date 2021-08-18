import { React, useState } from "react";
import { DragIndicator, Visibility, VisibilityOff } from "@material-ui/icons";
import "./styles.css";

const nutritionList = [
  { label: "carbs", value: "15.4g" },
  { label: "fat", value: "38.4g" },
  { label: "protein", value: "39g" },
  { label: "saturates", value: "12.1g" },
  { label: "sodium", value: "656mg" },
  { label: "fibre", value: "3.4g" },
];

const RecipeInfo = (props) => {
  const { recipe } = props;
  const [enlarge, setEnlarge] = useState(false);

  const handleEnlarge = () => {
    if (enlarge) {
      const detailsContainer = document.querySelector(".recipe-view-details");
      const nutritionContainer = document.querySelector(
        ".recipe-view-nutrition-container"
      );
      detailsContainer.style.transform = "translateY(0)";
      nutritionContainer.style.transform = "translateY(0)";
    } else {
      const detailsContainer = document.querySelector(".recipe-view-details");
      const nutritionContainer = document.querySelector(
        ".recipe-view-nutrition-container"
      );
      detailsContainer.style.transform = "translateY(-85%)";
      nutritionContainer.style.transform = `translateY(calc(-0.85 * ${detailsContainer.clientHeight}px))`;
    }
    setEnlarge(!enlarge);
  };

  const imageEnlarge = (url) => {
    let indexPosition = url.length - 4;
    const newS = url.slice(0, indexPosition);
    return newS + "-l.jpg";
  };

  return (
    <div className="recipe-view-details-container">
      <img className="recipe-view-img" src={imageEnlarge(recipe.img)} alt="" />
      <div className="recipe-view-information-container">
        <div className="recipe-view-details">
          <div className="recipe-view-details-content">
            <div className="recipe-view-details-label">Contains:</div>
            {recipe.cautions.map((caution, index) => {
              return (
                <div className="recipe-view-details-values">{caution}</div>
              );
            })}
          </div>
          <div className="recipe-view-details-content">
            <div className="recipe-view-details-label">Cuisine:</div>
            {recipe.cuisineType.map((cuisine, index) => {
              return (
                <div className="recipe-view-details-values">{cuisine}</div>
              );
            })}
          </div>
          <div className="recipe-view-details-content">
            <div className="recipe-view-details-label">Dish Type:</div>
            {recipe.dishType.map((dish, index) => {
              return <div className="recipe-view-details-values">{dish}</div>;
            })}
          </div>
          <div className="recipe-view-details-content">
            <div className="recipe-view-details-label">Meal Type:</div>
            {recipe.mealType.map((meal, index) => {
              return <div className="recipe-view-details-values">{meal}</div>;
            })}
          </div>
        </div>
        <div className="recipe-view-nutrition-container">
          <div
            className="recipe-view-information-control"
            onClick={handleEnlarge}
          >
            <DragIndicator class="recipe-view-drag-icon" />
          </div>
          <div className="recipe-view-nutrition-content">
            {nutritionList.map((nutrition, index) => {
              return (
                <div className="recipe-view-nutrition-item">
                  <div className="recipe-view-nutrition-value">
                    {nutrition.value}
                  </div>
                  <div className="recipe-view-nutrition-label">
                    {nutrition.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
