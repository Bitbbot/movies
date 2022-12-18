import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Context from "../../index";
import MainWindow from "../../components/MainWindow/MainWindow";
import { useEffect } from "react";
import { getAll } from "../../http/dbAPI";

const Group = observer(() => {
  const { groups } = useContext(Context);
  useEffect(() => {
    getAll("/api/group/all").then((res) => groups.setGroups(res.reverse()));
  }, []);
  return <MainWindow items={groups.groups} alt={"Group"} />;
});

export default Group;
