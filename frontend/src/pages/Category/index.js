import { React, useEffect } from "react";
import "./styles.css";
import CategoryAccordion from "../../components/CategoryPage/CategoryAccordion";
import CategoryHeader from "../../components/CategoryPage/CategoryHeader";

const categoryTypes = [
  {
    label: "dietary needs",
    types: [
      { label: "dairy free", img: "green" },
      { label: "gluten free", img: "yellow" },
      { label: "vegan", img: "red" },
      { label: "vegetarian", img: "lightblue" },
      { label: "high-fiber", img: "lightblue" },
      { label: "protein", img: "lightblue" },
      { label: "low-fat", img: "lightblue" },
      { label: "low-carb", img: "lightblue" },
      { label: "peanut free", img: "lightblue" },
    ],
  },
  {
    label: "cuisines",
    types: [
      { label: "american", img: "lightgreen" },
      { label: "asian", img: "grey" },
      { label: "british", img: "pink" },
      { label: "caribbean", img: "purple" },
      { label: "central europe", img: "yellow" },
      { label: "chinese", img: "red" },
      { label: "eastern europe", img: "orange" },
      { label: "french", img: "green" },
      { label: "indian", img: "blue" },
      { label: "italian", img: "skyblue" },
      { label: "japanese", img: "almondorange" },
      { label: "kosher", img: "violet" },
      { label: "mediterranean", img: "lightblue" },
      { label: "mexican", img: "lightgrey" },
      { label: "middle eastern", img: "darkgreen" },
      { label: "nordic", img: "crimsonred" },
      { label: "south american", img: "white" },
      { label: "south east asian", img: "darkblue" },
    ],
  },
  {
    label: "dish type",
    types: [
      { label: "biscuits and cookies", img: "lightgreen" },
      { label: "bread", img: "darkblue" },
      { label: "cereal", img: "crimsonred" },
      { label: "condiments", img: "purple" },
      { label: "drinks", img: "darkgreen" },
      { label: "dessert", img: "violet" },
      { label: "egg", img: "blue" },
      { label: "main course", img: "almondorange" },
      { label: "omelet", img: "pink" },
      { label: "pancake", img: "grey" },
      { label: "salad", img: "lightpink" },
      { label: "sandwiches", img: "skyblue" },
      { label: "soup", img: "orange" },
      { label: "starter", img: "green" },
    ],
  },
];

const Category = () => {
  useEffect(() => {
    document.body.style.overflow = "";
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      <div className="category-page-container">
        <div className="category-page-header">
          <CategoryHeader />
        </div>
        <div className="category-page-content">
          {categoryTypes.map((type, index) => {
            return <CategoryAccordion type={type} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
