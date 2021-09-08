import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2>
    </>
  );
};

export default App;
