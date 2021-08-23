import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../../../redux/slices/filterSlice";
import "./styles.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
const FilterAccordion = (props) => {
  const { filter } = props;
  const [open, setOpen] = useState(false);
  const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const addFilter = (type) => {
    const index = filters.indexOf(type);
    if (index !== -1) {
      const filterCopy = [...filters];
      filterCopy.splice(index, 1);
      dispatch(setFilters({ filters: [...filterCopy] }));
    } else {
      dispatch(setFilters({ filters: [...filters, type] }));
    }
  };

  return (
    <>
      <div className="filter-accordion-container">
        <div className="filter-accordion-label" onClick={handleOpen}>
          {filter.label}
          {open ? (
            <KeyboardArrowUp class="filter-accordion-icon" />
          ) : (
            <KeyboardArrowDown class="filter-accordion-icon" />
          )}
        </div>
        {open && (
          <div className="filter-types-outer">
            <div className="filter-types-container">
              {filter.types.map((type, index) => {
                return (
                  <label
                    className="filter-type"
                    style={{
                      backgroundColor: filters.includes(type)
                        ? "rgb(200, 200, 200, 0.8)"
                        : "",
                    }}
                  >
                    <div className="filter-type-label">{type}</div>
                    <input
                      type="checkbox"
                      className="filter-type-checkbox"
                      onChange={() => {
                        addFilter(type);
                      }}
                      checked={filters.includes(type)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterAccordion;
