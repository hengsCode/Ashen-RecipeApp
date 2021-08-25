import { React, useEffect } from "react";
import HomeContent from "../../components/HomePage/HomeContent";
import "./styles.css";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "";
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <div className="home-page-container">
        <HomeContent />
      </div>
    </>
  );
};

export default Home;
