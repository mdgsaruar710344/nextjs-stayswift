"use client"
import React, { useState } from "react";

const CheckboxComponent = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleFormChange = (event) => {
    const { value, checked, type } = event.target;

    // Ensure the event comes from a checkbox
    if (type === "checkbox") {
      if (checked) {
        setCheckedValues((prev) => [...prev, value]); // Add to state
      } else {
        setCheckedValues((prev) => prev.filter((item) => item !== value)); // Remove from state
      }
    }
  };

  return (
    <form onChange={handleFormChange}>
      <h3>Choose Options:</h3>

      <label>
        <input type="checkbox" value="Option 1" />
        Option 1
      </label>
      <br />
      <label>
        <input type="checkbox" value="Option 2" />
        Option 2
      </label>
      <br />
      <label>
        <input type="checkbox" value="Option 3" />
        Option 3
      </label>
      <br />
      <label>
        <input type="checkbox" value="Option 4" />
        Option 4
      </label>
      <br />
      <label>
        <input type="checkbox" value="Option 5" />
        Option 5
      </label>

      <div style={{ marginTop: "16px" }}>
        <strong>Checked Values:</strong> {checkedValues.join(", ")}
      </div>
    </form>
  );
};

export default CheckboxComponent;
