import { React } from "react";
import "./styles.css";
import HomeSearch from "../HomeSearch";
import HomeRecommendations from "../HomeRecommendations";
import HomeAbout from "../HomeAbout";
import HomeSrollingComponent from "../HomeScollingComponent";

const HomeContent = () => {
  return (
    <>
      <div className="home-contents-container">
        <div className="home-search-section">
          <HomeSearch />
        </div>
        <div className="home-contents-section">
          <HomeRecommendations />
        </div>
        <div className="home-contents-section">
          <HomeAbout />
        </div>
      </div>
      <HomeSrollingComponent />
    </>
  );
};

export default HomeContent;
