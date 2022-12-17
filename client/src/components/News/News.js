import React, { useContext } from "react";
import classes from "./News.module.css";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import Item from "./Item/Item";

const News = observer(() => {
  const { news } = useContext(Context);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>News</div>
      {news.news.map((item) => {
        return <Item item={item} key={item.img} />;
      })}
    </div>
  );
});

export default News;
