import "./App.css";
import "./normalize.css";
import Home from "./views/Home";
import { Router } from "@reach/router";
import IngresoDePedido from "./views/IngresoDePedido";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <IngresoDePedido path="/ingresarPedido" />
    </Router>
  );
};

export default App;
