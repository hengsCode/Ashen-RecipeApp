import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { Timer, ListAlt } from "@material-ui/icons";

const RecipeScrollingComponent = () => {
  const { scrollY } = useSelector((state) => state.scroll);

  useEffect(() => {
    let vh = document.querySelector(".recipe-start-ingreds").clientHeight;
    let indicator = document.querySelector(".recipe-start-scroll-button");
    let icon = document.querySelectorAll(".recipe-start-icon");
    if (scrollY < vh / 2) {
      icon.forEach((e) => (e.style.display = "none"));
      indicator.style.opacity = 0;
    } else if (scrollY > vh / 2 && scrollY < vh * 1.5) {
      icon.forEach((e) => (e.style.display = ""));
      indicator.style.opacity = 1;
      indicator.style.top = "0";
    } else {
      icon.forEach((e) => (e.style.display = ""));
      indicator.style.opacity = 1;
      indicator.style.top = "4.5vh";
    }
  }, [scrollY]);

  const handleScrollDown = (section) => {
    let height = document.querySelector(".recipe-start-ingreds").clientHeight;
    window.scrollTo({
      top: height * section,
      behavior: "smooth",
    });
  };

  return (
    <div className="recipe-start-scroll-button-container">
      <div className="recipe-start-scroll-button" />
      <ListAlt class="recipe-start-icon" onClick={() => handleScrollDown(1)} />
      <Timer class="recipe-start-icon" onClick={() => handleScrollDown(2)} />
    </div>
  );
};

export default RecipeScrollingComponent;
