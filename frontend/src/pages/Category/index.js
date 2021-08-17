import { React } from "react";
import "./styles.css";
import CategoryAccordion from "../../components/CategoryAccordion";

const categoryTypes = [
  {
    label: "quick access",
    types: [
      { label: "quick & easy", img: "green" },
      { label: "dairy free", img: "yellow" },
      { label: "breakfast", img: "red" },
      { label: "lunch", img: "lightblue" },
      { label: "dinner", img: "grey" },
      { label: "snack", img: "lightgreen" },
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
    label: "category",
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
  return (
    <>
      <div className="category-page-container">
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
