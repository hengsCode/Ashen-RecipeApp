import { React, useState } from "react";
import "./styles.css";
import {
  Menu,
  Timer,
  Loop,
  Comment,
  KeyboardArrowUp,
} from "@material-ui/icons";

const MethodOptions = (props) => {
  const { toggleTimer, toggleNotes } = props;
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState([]);

  const handleMenuOpen = () => {
    const icon1 = document.querySelector("#method-icon-1");
    const icon2 = document.querySelector("#method-icon-2");
    const icon3 = document.querySelector("#method-icon-3");
    const menu = document.querySelector("#method-menu-icon");
    if (open) {
      icon1.style.transform = "translateY(0)";
      icon2.style.transform = "translateY(0)";
      icon3.style.transform = "translateY(0)";
      menu.style.transform = "rotate(0)";
      menu.style.fill = "var(--background)";
      menu.style.backgroundColor = "var(--primary)";
    } else {
      icon1.style.transform = "translateY(-60px)";
      icon2.style.transform = "translateY(-120px)";
      icon3.style.transform = "translateY(-180px)";
      menu.style.transform = "rotate(180deg)";
      menu.style.fill = "var(--background)";
      menu.style.backgroundColor = "var(--primary-darker)";
    }
    setOpen(!open);
  };

  const handleHover = (id) => {
    const label = document.querySelector(id);
    label.style.opacity = 1;
    label.style.transform = "translateX(-100%)";
  };
  const handleHoverOut = (id) => {
    const label = document.querySelector(id);
    label.style.opacity = 0;
    label.style.transform = "translateX(0)";
  };

  const handleToggle = (index) => {
    if (!toggle.includes(index)) {
      setToggle(() => [...toggle, index]);
    } else {
      const delIndex = toggle.indexOf(index);
      toggle.splice(delIndex, 1);
      setToggle(() => [...toggle]);
    }
  };

  return (
    <div className="method-options-container">
      <div
        className="method-options-icon-container"
        id="method-icon-1"
        style={{ opacity: open ? 1 : 0 }}
      >
        <div className="method-icon-label" id="method-reset-label">
          Restart
        </div>
        <Loop
          id="method-reset-icon"
          class="method-options-icon"
          onMouseOver={() => handleHover("#method-reset-label")}
          onMouseLeave={() => handleHoverOut("#method-reset-label")}
          onClick={() => handleToggle(1)}
          style={{
            fill: toggle.includes(1) ? "var(--primary)" : "",
            backgroundColor: toggle.includes(1) ? "var(--background)" : "",
          }}
        />
      </div>
      <div
        className="method-options-icon-container"
        id="method-icon-2"
        style={{ opacity: open ? 1 : 0 }}
      >
        <div className="method-icon-label" id="method-notes-label">
          Notes
        </div>
        <Comment
          id="method-notes-icon"
          class="method-options-icon"
          onMouseOver={() => handleHover("#method-notes-label")}
          onMouseLeave={() => handleHoverOut("#method-notes-label")}
          onClick={() => {
            handleToggle(2);
            toggleNotes();
          }}
          style={{
            fill: toggle.includes(2) ? "var(--primary)" : "",
            backgroundColor: toggle.includes(2) ? "var(--background)" : "",
          }}
        />
      </div>
      <div
        className="method-options-icon-container"
        id="method-icon-3"
        style={{
          opacity: open ? 1 : 0,
        }}
      >
        <div className="method-icon-label" id="method-timer-label">
          Timer
        </div>

        <Timer
          id="method-timer-icon"
          class="method-options-icon"
          onMouseOver={() => handleHover("#method-timer-label")}
          onMouseLeave={() => handleHoverOut("#method-timer-label")}
          onClick={() => {
            handleToggle(3);
            toggleTimer();
          }}
          style={{
            fill: toggle.includes(3) ? "var(--primary)" : "",
            backgroundColor: toggle.includes(3) ? "var(--background)" : "",
          }}
        />
      </div>
      <div className="method-options-icon-container">
        <KeyboardArrowUp
          id="method-menu-icon"
          class="method-menu-icon"
          onClick={handleMenuOpen}
        />
      </div>
    </div>
  );
};

export default MethodOptions;
