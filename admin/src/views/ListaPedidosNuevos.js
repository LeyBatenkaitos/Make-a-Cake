import React, { useState } from "react";
import ListaDePedidos from "../components/ListaDePedidos";
import Nav from "../components/Nav";

const ListaPedidosNuevos = () => {
  const [nuevoPedidoIngresado, setNuevoPedidoIngresado] = useState(0);
  const actualizarLista = () => setNuevoPedidoIngresado((num) => ++num);
  return (
    <>
      <Nav />
      <ListaDePedidos
        ingresarNuevoPedido={nuevoPedidoIngresado}
        onActualizar={actualizarLista}
      />
    </>
  );
};

export default ListaPedidosNuevos;
