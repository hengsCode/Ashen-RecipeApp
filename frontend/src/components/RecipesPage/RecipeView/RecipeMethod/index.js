import { React } from "react";
import "./styles.css";

const RecipeMethod = (props) => {
  const { methods } = props;

  return (
    <>
      <div className="recipe-view-methods-header">Methods</div>
      <div className="recipe-view-methods-content">
        {methods.map((method, _) => {
          return <ol className="recipe-method-item">{method}</ol>;
        })}
      </div>
    </>
  );
};

export default RecipeMethod;
