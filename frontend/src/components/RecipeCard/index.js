import { React } from "react";
import "./styles.css";

const RecipeCard = (props) => {
  const { recipe } = props;
  const imageEnlarge = (url) => {
    let indexPosition = url.length - 4;
    const newS = url.slice(0, indexPosition);
    return newS + "-l.jpg";
  };
  const largeImg = imageEnlarge(recipe.img);
  return (
    <>
      <div className="recipe-container">
        <img className="recipe-img" src={largeImg} alt="" />
        <object
          className="recipe-img-fault"
          data="https://i.pinimg.com/originals/b9/f4/c2/b9f4c22a512e5399cdba6da0cd8fe8f2.png"
        >
          {" "}
        </object>
        <div className="recipe-description">
          <div className="recipe-label">
            {recipe.label.length > 23
              ? recipe.label.substring(0, 23) + "..."
              : recipe.label}
          </div>
          <div className="recipe-details">
            Serves: {recipe.servings} / {recipe.time} minutes
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
