import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";
import { useEffect } from "react";
import { getAll } from "../../http/dbAPI";

const Auditions = observer(() => {
  const { auditions } = useContext(Context);
  useEffect(() => {
    getAll("/api/audition/all").then((res) =>
      auditions.setAuditions(res.reverse())
    );
  }, []);
  return <MainWindow items={auditions.auditions} alt={"Auditions"} />;
});

export default Auditions;
