import { React } from "react";
import { useSelector } from "react-redux";
import FilterAccordion from "./FilterAccordion";
import "./styles.css";

const filterList = [
  { label: "meal type", types: ["breakfast", "lunch", "dinner"] },
  {
    label: "dish type",
    types: [
      "biscuits and cookies",
      "bread",
      "cereal",
      "condiments",
      "drinks",
      "dessert",
      "egg",
      "main course",
      "omelet",
      "pancake",
      "salad",
      "sandwhiches",
      "soup",
      "starter",
    ],
  },
  { label: "cuisines", types: ["american", "asian", "british"] },
  {
    label: "dietary needs",
    types: ["dairy free", "gluten free", "vegan"],
  },
];

const RecipeFilter = () => {
  const { filters } = useSelector((state) => state.filters);

  const handleClick = () => {
    console.log(filters);
  };
  return (
    <div className="recipe-filter-container">
      <div className="recipe-filter-header-container">
        <div className="recipe-filter-header">Filters</div>
        <div className="recipe-filter-submit-fab" onClick={handleClick}>
          Confirm
        </div>
      </div>
      <div className="recipe-filter-list-container">
        {filterList.map((filter, _) => {
          return (
            <>
              <FilterAccordion filter={filter} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeFilter;
