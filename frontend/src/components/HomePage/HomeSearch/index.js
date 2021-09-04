import { React, useState } from "react";
import "./styles.css";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const HomeSearch = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search.length > 0) {
      history.push({
        pathname: `/recipe/${search}`,
        state: { filter: search, type: "search" },
      });
    }
  };

  return (
    <>
      <div className="home-search-container">
        <div className="home-search-header">Search for a Recipe!</div>
        <div className="home-search-bar-container">
          <Search class="home-search-icon" />
          <input
            className="home-search-bar"
            type="text"
            value={search}
            onChange={handleChange}
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
            placeholder="Find something to cook..."
          />
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
