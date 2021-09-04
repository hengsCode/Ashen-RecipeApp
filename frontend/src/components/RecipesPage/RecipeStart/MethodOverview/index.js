import { React, useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown, Info } from "@material-ui/icons";
import "./styles.css";
import MethodOptions from "./MethodOptions";
import MethodInfo from "./MethodInfo";
import MethodTimer from "./MethodTimer";
import MethodNotes from "./MethodNotes";

const MethodOverview = (props) => {
  const { methods } = props;
  const [step, setStep] = useState(0);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [info, setInfo] = useState({ img: "", notes: "" });
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleNotes, setToggleNotes] = useState(false);

  const handleCardNav = (index) => {
    if (index < methods.length && index >= 0) {
      toggleInfo && handleCardInfo();
      setStep(index);
      const container = document.querySelector(".method-card-inner");
      const card = document.querySelector(".method-card");
      container.style.transform = `translateY(calc(${index + 1} * (-${
        card.clientHeight
      }px - 25px))`;
    }
  };

  const handleCardInfo = (cardInfo) => {
    if (cardInfo) {
      const { img, notes } = cardInfo;
      setInfo({ ...info, img: img, notes: notes });
    }
    const infoContainer = document.querySelector(".method-info-container");
    if (!toggleInfo) {
      infoContainer.style.opacity = 1;
      infoContainer.style.transform = "translateX(0)";
    } else {
      infoContainer.style.opacity = 0;
      infoContainer.style.transform = "translateX(100%)";
    }
    setTimeout(() => {
      if (toggleInfo) {
      }
      setToggleInfo(!toggleInfo);
    }, 500);
  };

  const openTimer = () => {
    setToggleTimer(!toggleTimer);
  };

  const openNotes = () => {
    setToggleNotes(!toggleNotes);
  };

  return (
    <div className="method-overview-outer">
      <MethodOptions toggleTimer={openTimer} toggleNotes={openNotes} />
      <div className="method-overview-container">
        <div className="method-overview-header">methods</div>
        <div className="method-options-content-container">
          {toggleTimer && <MethodTimer />}
          {toggleNotes && <MethodNotes />}
        </div>
        <div className="method-info-container">
          <MethodInfo info={info} />
        </div>
        <div className="method-card-container">
          <div className="method-card-inner">
            <div
              className="method-card"
              style={{
                backgroundColor: "var(--primary-lighty)",
              }}
            />
            {methods.map((method, index) => {
              return (
                <div
                  className="method-card"
                  style={{
                    backgroundColor:
                      index == step
                        ? "var(--primary)"
                        : "var(--primary-lighty)",
                    color:
                      index == step ? "var(--background)" : "var(--primary)",
                  }}
                >
                  {step == index && (
                    <div className="method-card-index">{index + 1}</div>
                  )}
                  <div className="method-card-content">{method.step}</div>
                  <div
                    className="method-icons-container"
                    style={{ opacity: index == step ? 1 : 0 }}
                  >
                    {(method.notes || method.img) && (
                      <Info
                        class="method-footer-icon"
                        onClick={() =>
                          handleCardInfo({
                            img: method.img,
                            notes: method.notes,
                          })
                        }
                      />
                    )}
                  </div>
                  {step - 1 == index && (
                    <>
                      <div className="method-card-footer-index">
                        <div className="method-card-footer-index-val">
                          {step}
                        </div>
                        <div
                          className="method-card-nav-up"
                          onClick={() => handleCardNav(index)}
                        >
                          <KeyboardArrowUp class="method-card-nav" />
                        </div>
                      </div>
                    </>
                  )}
                  {step + 1 == index && index != methods.length - 1 && (
                    <div className="method-card-header-index">
                      <div className="method-card-header-index-val">
                        {index + 1}
                      </div>
                      <div
                        className="method-card-nav-down"
                        onClick={() => handleCardNav(index)}
                      >
                        <KeyboardArrowDown class="method-card-nav" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodOverview;
