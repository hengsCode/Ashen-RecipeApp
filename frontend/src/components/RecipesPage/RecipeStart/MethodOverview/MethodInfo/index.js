import { React } from "react";
import "./styles.css";

const MethodInfo = (props) => {
  const { info } = props;
  const { img, notes } = info;
  return (
    <div className="method-info-content">
      {img && <img className="method-step-img" src={img} alt="" />}
      {notes && (
        <div className="method-notes-container">
          <div className="method-notes-content">
            <div style={{ fontWeight: 400 }}>Notes:</div>
            {notes}
          </div>
        </div>
      )}
    </div>
  );
};

export default MethodInfo;
