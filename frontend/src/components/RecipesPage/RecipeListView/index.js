import { React, useState } from "react";
import "./styles.css";
import RecipeCard from "../../RecipeCard";
import RecipeView from "../RecipeView";

const RecipeListView = (props) => {
  const { recipeList, category } = props;
  const [modal, setModal] = useState(false);
  const [recipe, setRecipe] = useState("");

  const handleClick = (recipe) => {
    const body = document.body;
    body.style.overflow = "hidden";
    setModal(true);
    setRecipe(recipe);
  };

  const handleClose = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className="recipe-list-view-container"
        style={{
          opacity: modal ? 0.3 : 1,
        }}
      >
        <div className="recipe-list-view-header">{category}</div>
        <div className="recipe-list-view-content">
          {recipeList.map((recipe, index) => {
            return (
              <>
                <div
                  className="recipe-list-view-item"
                  onClick={() => {
                    handleClick(recipe);
                  }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
                <div
                  className="recipe-list-view-item"
                  onClick={() => {
                    handleClick(recipe);
                  }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      {modal && <RecipeView recipe={recipe} handleClose={handleClose} />}
    </>
  );
};

export default RecipeListView;
