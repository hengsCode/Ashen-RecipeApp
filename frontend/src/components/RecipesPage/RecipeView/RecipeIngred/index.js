import { React } from "react";
import "./styles.css";

const RecipeIngred = (props) => {
  const { ingredients } = props;
  return (
    <>
      <div className="recipe-view-ingredients-header">Ingredients</div>
      <div className="recipe-view-ingredients-content">
        {ingredients.map((ingredient, _) => {
          return (
            <>
              <div className="recipe-view-ingredients">{ingredient.text}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RecipeIngred;
