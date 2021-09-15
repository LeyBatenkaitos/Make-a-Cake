import React from "react";
import FormularioDeNuevoPedido from "../components/FormularioDeNuevoPedido";
import Nav from "../components/Nav";

const IngresoDePedido = () => {
  return (
    <>
      <Nav />
      <div className="">
        <h1>Ingresa tus datos de Envio</h1>
        <FormularioDeNuevoPedido />
      </div>
    </>
  );
};

export default IngresoDePedido;
