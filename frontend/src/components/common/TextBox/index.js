import { React } from "react";
import "./styles.css";

const TextBox = (props) => {
  const { label, value, onChange } = props;
  return (
    <div className="textbox-container">
      <div className="textbox-label">{label}</div>
      <input
        type="text"
        className="textbox-content"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
