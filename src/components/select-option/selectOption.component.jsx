import React from "react";

import "./selectOption.styles.scss";

const SelectOption = ({ handleChange, value }) => {
  return (
    <select className="select-option" value={value} onChange={handleChange}>
      <option value="website">I need a website</option>
      <option value="mobile app">I need a mobile app</option>
      <option value="desktop app">I need a desktop app</option>
      <option value="desktop app">I need a quick fix to part of my app</option>
      <option value="desktop app">I need something else</option>
    </select>
  );
};

export default SelectOption;
