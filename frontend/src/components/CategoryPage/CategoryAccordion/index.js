import { React } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const CategoryAccordion = (props) => {
  const { type } = props;
  const { types } = type;
  const history = useHistory();

  const handleViewMore = () => {
    const dropdown = document.getElementById(`${type.label}`);
    dropdown.style.maxHeight = `calc(${dropdown.clientHeight}px + 400px)`;
  };

  const handleClick = (filter) => {
    history.push({
      pathname: `/recipe/${filter}`,
      state: { filter: filter, type: type.label },
    });
  };

  return (
    <>
      <div className="accordion-container">
        <div className="accordion-header">{type.label}</div>
        <div className="dd-container" id={`${type.label}`}>
          <div className="dd-content">
            {types.map((category, _) => {
              return (
                <div
                  className="dd-item"
                  onClick={() => {
                    handleClick(category.label);
                  }}
                >
                  <div className="dd-label">{category.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dd-button-container">
          <div className="dd-button-line" />
          <div className="dd-button" onClick={handleViewMore}>
            View More
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryAccordion;
