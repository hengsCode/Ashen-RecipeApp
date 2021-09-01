import { React } from "react";
import "./styles.css";
import { Error, LocalDining, RoomService, Schedule } from "@material-ui/icons";

const RecipeInfo = (props) => {
  const { recipe } = props;

  const imageEnlarge = (url) => {
    let indexPosition = url.length - 4;
    const newS = url.slice(0, indexPosition);
    return newS + "-l.jpg";
  };

  return (
    <div className="recipe-view-details-container">
      <img className="recipe-view-img" src={imageEnlarge(recipe.img)} alt="" />
      <div className="recipe-view-header">{recipe.label}</div>
      <div className="recipe-view-info">
        <div className="recipe-view-details-content">
          <Error />
          {recipe.cautions.map((caution, index) => {
            return (
              <div className="recipe-view-details-values">
                {caution}
                {index !== recipe.cautions.length - 1 && ", "}
              </div>
            );
          })}
        </div>
        <div className="recipe-view-details-content">
          <RoomService />
          {recipe.servings} serving{recipe.servings > 1 && "s"}
        </div>
        <div className="recipe-view-details-content">
          <Schedule />
          {recipe.time} min
        </div>
        <div className="recipe-view-details-content">
          <LocalDining />
          {recipe.calories.toFixed()} kCal
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
