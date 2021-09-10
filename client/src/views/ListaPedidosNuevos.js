import React, { useState } from "react";
import ListaDePedidos from "../components/ListaDePedidos";

const ListaPedidosNuevos = () => {
  const [nuevoPedidoIngresado, setNuevoPedidoIngresado] = useState(0);
  const actualizarLista = () => setNuevoPedidoIngresado((num) => ++num);
  return (
    <>
      <ListaDePedidos
        ingresarNuevoPedido={nuevoPedidoIngresado}
        onActualizar={actualizarLista}
      />
    </>
  );
};

export default ListaPedidosNuevos;
