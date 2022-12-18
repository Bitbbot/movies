import React, { useContext } from "react";
import classes from "./Topics.module.css";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import Item from "./Item/Item";
import { useEffect } from "react";
import { getAll } from "../../http/dbAPI";

const Topics = observer(() => {
  const { topics } = useContext(Context);
  useEffect(() => {
    getAll("/api/topic/all").then((res) => topics.setTopics(res.reverse()));
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Topics</div>
      {topics.topics.map((item) => {
        return <Item item={item} key={item.img} />;
      })}
    </div>
  );
});

export default Topics;
