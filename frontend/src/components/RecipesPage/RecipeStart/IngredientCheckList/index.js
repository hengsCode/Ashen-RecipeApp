import { React, useState } from "react";
import "./styles.css";
import { Remove, Undo } from "@material-ui/icons";

const IngredientCheckList = (props) => {
  const { ingredients } = props;
  const [checklist, setCheckList] = useState([
    ...Array(ingredients.length).keys(),
  ]);
  const [checked, setChecked] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const handleCheck = (index) => {
    if (checked.includes(index)) {
      const delIndex = checked.indexOf(index);
      checked.splice(delIndex, 1);
      setChecked(() => [...checked]);
      setCheckList(() => [...checklist, index]);
    } else {
      const delIndex = checklist.indexOf(index);
      checklist.splice(delIndex, 1);
      setCheckList(() => [...checklist]);
      setChecked(() => [...checked, index]);
    }
  };

  const handleDelete = (index) => {
    setDeleted(() => [...deleted, index]);
    if (checked.includes(index)) {
      const delIndex = checked.indexOf(index);
      checked.splice(delIndex, 1);
      setChecked(() => [...checked]);
    }
    if (checklist.includes(index)) {
      const delIndex = checklist.indexOf(index);
      checklist.splice(delIndex, 1);
      setCheckList(() => [...checklist]);
    }
  };

  const handleUndo = (index) => {
    const addIndex = deleted.indexOf(index);
    deleted.splice(addIndex, 1);
    setDeleted(() => [...deleted]);
    setCheckList(() => [...checklist, index]);
  };

  return (
    <div className="ingredientchecklist-container">
      <div className="ingredientschecklist-content">
        <div className="ingredientschecklist-inner">
          <div>
            <div className="ingredients-list-label">ingredients</div>
            {checklist.map((index) => {
              return (
                <div className="ingredient-list-item">
                  <input
                    type="checkbox"
                    className="ingredient-list-checkbox"
                    onChange={() => handleCheck(index)}
                    checked={false}
                  />
                  <div
                    className="ingredient-list-content"
                    onClick={() => handleCheck(index)}
                  >
                    {ingredients[index].text}
                  </div>
                  <Remove
                    class="ingredient-list-delete"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              );
            })}
          </div>
          {(checked.length > 0 || deleted.length > 0) && (
            <div className="ingredients-checked-deleted">
              {checked.length > 0 && (
                <div>
                  <div className="ingredients-list-label">checked</div>
                  {checked.map((index) => {
                    return (
                      <div className="ingredient-list-item">
                        <input
                          type="checkbox"
                          className="ingredient-list-checkbox"
                          checked
                          onChange={() => handleCheck(index)}
                        />
                        <div
                          className="ingredient-list-content"
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "grey",
                            opacity: 0.6,
                          }}
                          onClick={() => handleCheck(index)}
                        >
                          {ingredients[index].text}
                        </div>
                        <Remove
                          class="ingredient-list-delete"
                          onClick={() => handleDelete(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              {deleted.length > 0 && (
                <div>
                  <div className="ingredients-list-label">deleted</div>
                  {deleted.map((index) => {
                    return (
                      <div className="ingredient-list-item">
                        <input
                          type="checkbox"
                          className="ingredient-list-checkbox"
                          disabled
                          style={{ cursor: "default" }}
                        />
                        <div
                          className="ingredient-list-content"
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "grey",
                            opacity: 0.3,
                          }}
                        >
                          {ingredients[index].text}
                        </div>
                        <Undo
                          class="ingredient-list-undo"
                          onClick={() => handleUndo(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientCheckList;
