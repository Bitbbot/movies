import React from "react";
import classes from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <div className={classes.wrapper}>
      <img src={item.img} className={classes.img} />
      <div className={classes.description}>{item.text}</div>
    </div>
  );
};

export default Item;
