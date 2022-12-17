import React from "react";
import Item from "./Item/Item";
import classes from "./MainWindow.module.css";
const MainWindow = ({ items, alt }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{alt}</div>
      {items.map((item) => {
        return <Item item={item} key={item.img} />;
      })}
    </div>
  );
};

export default MainWindow;
