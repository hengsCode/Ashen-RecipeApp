import { React } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const categoryList = [
  { label: "All Recipes", filter: "all recipes", type: "all" },
  { label: "Quick & Easy", filter: "quick & easy", type: "custom" },
  { label: "Dairy Free", filter: "dairy-free", type: "dietary needs" },
  { label: "Breakfast", filter: "breakfast", type: "mealType" },
  { label: "Lunch", filter: "lunch", type: "mealType" },
  { label: "Dinner", filter: "dinner", type: "mealType" },
  { label: "Snack", filter: "snack", type: "mealType" },
  { label: "Vegetarian", filter: "vegetarian", type: "dietary needs" },
];
const CategoryHeader = () => {
  const history = useHistory();

  const handleClick = (category) => {
    history.push({
      pathname: `/recipe/${category.filter}`,
      state: { filter: category.filter, type: category.type },
    });
  };

  return (
    <>
      <div className="category-header-container">
        {categoryList.map((category, _) => {
          return (
            <div
              className="category-header-item"
              onClick={() => handleClick(category)}
            >
              {category.label}
            </div>
          );
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
