import { React } from "react";
import "./styles.css";

const categoryList = [
  "All Recipes",
  "Quick & Easy",
  "Dairy Free",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Vegetarian",
];
const CategoryHeader = () => {
  return (
    <>
      <div className="category-header-container">
        {categoryList.map((category, _) => {
          return <div className="category-header-item">{category}</div>;
        })}
      </div>
      <img
        className="category-header-img"
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=2000&q=2000"
        alt=""
      />
    </>
  );
};

export default CategoryHeader;
