import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";

const Auditions = observer(() => {
  const { auditions } = useContext(Context);
  return <MainWindow items={auditions.auditions} alt={"Auditions"} />;
});

export default Auditions;
