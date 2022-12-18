import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";
import { getAll } from "../../http/dbAPI";

const Actors = observer(() => {
  const { actors } = useContext(Context);
  useEffect(() => {
    getAll("/api/actor/all").then((res) => actors.setActors(res.reverse()));
  }, []);
  return <MainWindow items={actors.actors} alt={"Actors"} />;
});

export default Actors;
