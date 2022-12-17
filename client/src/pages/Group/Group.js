import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";

const Group = observer(() => {
  const { groups } = useContext(Context);
  return <MainWindow items={groups.groups} alt={"Group"} />;
});

export default Group;
