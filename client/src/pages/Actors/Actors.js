import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";

const Actors = observer(() => {
  const { actors } = useContext(Context);
  return <MainWindow items={actors.actors} alt={"Actors"} />;
});

export default Actors;
