import { React, useState } from "react";
import "./styles.css";

const RecipeSorter = (props) => {
  const { handleSortClick } = props;
  const [sortBy, setSortBy] = useState(-1);
  const handleClick = (e) => {
    const type = e.target.innerHTML;
    if (type === "popularity") {
      if (sortBy === 0) {
        setSortBy(-1);
      } else {
        setSortBy(0);
      }
    } else if (type === "time") {
      if (sortBy === 1) {
        setSortBy(-1);
      } else {
        setSortBy(1);
      }
    }
    console.log(sortBy);
    handleSortClick(type);
  };
  return (
    <div className="recipe-sorter-container">
      Sort By:
      <div
        className="recipe-sorter"
        style={{
          backgroundColor: sortBy === 0 ? "var(--background-secondary)" : "",
          textDecoration: sortBy === 0 ? "underline" : "",
        }}
        onClick={handleClick}
      >
        popularity
      </div>
      /
      <div
        className="recipe-sorter"
        style={{
          backgroundColor: sortBy === 1 ? "var(--background-secondary)" : "",
          textDecoration: sortBy === 1 ? "underline" : "",
        }}
        onClick={handleClick}
      >
        time
      </div>
    </div>
  );
};

export default RecipeSorter;
