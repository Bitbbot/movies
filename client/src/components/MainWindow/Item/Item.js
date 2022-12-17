import React from "react";
import classes from "./Item.module.css";
import Specific from "./Specific/Specific";

const Item = ({ item }) => {
  const properties = Object.keys(item).filter(
    (property) => property !== "text" && property !== "img"
  );
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={item.img} className={classes.img} />
      </div>
      <div>
        <div className={classes.properties}>
          {properties.map((property) => {
            return (
              <Specific
                property={property}
                value={item[property]}
                key={Math.random()}
              />
            );
          })}
        </div>
        <div>{item.text}</div>
      </div>
    </div>
  );
};

export default Item;
