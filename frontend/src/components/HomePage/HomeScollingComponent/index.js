import { React } from "react";
import "./styles.css";

const HomeSrollingComponent = () => {
  const handleScrollDown = (section) => {
    let height = document.querySelector(".home-contents-section").clientHeight;
    window.scrollTo({
      top: height * section,
      behavior: "smooth",
    });
  };
  let headers = ["Search", "Recommendations", "About"];
  return (
    <div className="scroll-button-container">
      {headers.map((header, index) => {
        return (
          <div
            className="scroll-button"
            onClick={() => handleScrollDown(index)}
          >
            {header}
          </div>
        );
      })}
    </div>
  );
};

export default HomeSrollingComponent;
