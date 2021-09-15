import "./normalize.css";
import "./App.css";
import Home from "./views/Home";
import { Router } from "@reach/router";
import ListaPedidosNuevos from "./views/ListaPedidosNuevos";
import Pedido from "./components/Pedido";
import EditarProducto from "./components/EditarPedido";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <ListaPedidosNuevos path="/lista" />
      <Pedido path="/:pedidoId" />
      <EditarProducto path="/:pedidoId/editar" />
    </Router>
  );
};

export default App;
