import { React } from "react";
import "./styles.css";

const TextArea = (props) => {
  const { label, value, onChange } = props;
  return (
    <div className="textarea-container">
      <div className="textarea-label">{label}</div>
      <textarea
        maxLength={200}
        rows={3}
        type="text"
        className="textarea-content"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
