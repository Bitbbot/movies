import React from "react";
import classes from "./Field.module.css";
const Field = ({ values, field }) => {
  return (
    <div className={classes.wrapper}>
      <label>{field}</label>
      <input
        type="text"
        className={classes.text_field}
        onChange={(e) => {
          values[field] = e.target.value;
        }}
      />
    </div>
  );
};

export default Field;
