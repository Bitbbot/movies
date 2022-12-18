import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";
import { useEffect } from "react";
import { getAll } from "../../http/dbAPI";

const Jobs = observer(() => {
  const { jobs } = useContext(Context);
  useEffect(() => {
    getAll("/api/job/all").then((res) => jobs.setJobs(res.reverse()));
  }, []);
  return <MainWindow items={jobs.jobs} alt={"Jobs"} />;
});

export default Jobs;
