import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import {
  Search,
  EmojiObjectsOutlined,
  GroupOutlined,
} from "@material-ui/icons";

const HomeSrollingComponent = () => {
  const { scrollY } = useSelector((state) => state.scroll);

  useEffect(() => {
    let vh = document.querySelector(".home-contents-section").clientHeight;
    let indicator = document.querySelector(".scroll-button");
    if (scrollY < vh / 2) {
      indicator.style.top = "0";
    } else if (scrollY > vh / 2 && scrollY < vh * 1.5) {
      indicator.style.top = "4.5vh";
    } else if (scrollY > vh) {
      indicator.style.top = "calc(2 * 4.5vh)";
    }
  }, [scrollY]);

  const handleScrollDown = (section) => {
    let height = document.querySelector(".home-contents-section").clientHeight;
    window.scrollTo({
      top: height * section,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-button-container">
      <div className="scroll-button" />
      <Search class="icon" onClick={() => handleScrollDown(0)} />
      <EmojiObjectsOutlined class="icon" onClick={() => handleScrollDown(1)} />
      <GroupOutlined class="icon" onClick={() => handleScrollDown(2)} />
    </div>
  );
};

export default HomeSrollingComponent;
