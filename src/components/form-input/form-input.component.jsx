import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  label,
  handleChange,
  value,
  message,
  ...otherInputProps
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="0"
      className="group"
    >
      <input
        className={`form-input ${message ? "message" : ""}`}
        {...otherInputProps}
        onChange={handleChange}
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
