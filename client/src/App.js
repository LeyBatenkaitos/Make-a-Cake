import React, { useEffect, useState } from "react";
import "./App.css";
import "./normalize.css";
import Home from "./views/Home";

const App = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      <Home></Home>
      <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2>
    </>
  );
};

export default App;
