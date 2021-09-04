import { React, useState } from "react";
import "./styles.css";

const MethodNotes = () => {
  const [notes, setNotes] = useState("ee");
  const handleAddNotes = (e) => {
    setNotes(e.target.value);
  };
  return (
    <div className="method-add-notes-container">
      <div className="method-add-notes-content">
        Add Notes:
        <textarea
          className="method-add-notes-input"
          placeholder="add notes this step..."
          value={notes}
          onChange={handleAddNotes}
        />
      </div>
    </div>
  );
};

export default MethodNotes;
