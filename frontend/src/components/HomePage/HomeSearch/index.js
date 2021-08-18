import { React, useState, useEffect } from "react";
import "./styles.css";
import { Search } from "@material-ui/icons";
import VanillaTilt from "vanilla-tilt";
import { useHistory } from "react-router-dom";

const HomeSearch = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    history.push({
      pathname: `/recipe/${search}`,
      state: { filter: search, type: "search" },
    });
  };

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".home-search-container"), {
      max: 3,
      speed: 400,
    });
  }, []);

  return (
    <>
      <div className="home-search-container">
        <div className="home-search-header">Search for a Recipe!</div>
        <div className="home-search-bar-container">
          <input
            className="home-search-bar"
            type="text"
            value={search}
            onChange={handleChange}
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
          />
          <Search class="home-search-icon" />
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
