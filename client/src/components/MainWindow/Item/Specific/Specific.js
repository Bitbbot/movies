import React from "react";
import classes from "./Specific.module.css";
const Specific = ({ property, value }) => {
  return (
    <div className={classes.wrapper}>
      <div>{property}</div>
      <div className={classes.dash}>-</div>
      <div>{value}</div>
    </div>
  );
};

export default Specific;
