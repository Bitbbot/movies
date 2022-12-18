import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import Context from "./index";
import { check } from "./http/userAPI";

function App() {
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    check()
      .then((res) => {
        user.setIsAuth(true);
        user.setIsAdmin(res.isAdmin);
      })
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <h1>Грузимся</h1>;
  }
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
