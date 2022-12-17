import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";

const Jobs = observer(() => {
  const { jobs } = useContext(Context);
  return <MainWindow items={jobs.jobs} alt={"Jobs"} />;
});

export default Jobs;
