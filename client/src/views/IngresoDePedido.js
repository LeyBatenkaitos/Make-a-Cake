import React, { useState } from "react";
import FormularioDeNuevoPedido from "../components/FormularioDeNuevoPedido";

import Nav from "../components/Nav";

const IngresoDePedido = () => {
  const [ingresarNuevoPedido, setIngresarNuevoPedido] = useState(0);
  console.log(ingresarNuevoPedido);
  const actualizarLista = () => setIngresarNuevoPedido((num) => ++num);
  return (
    <>
      <Nav />
      <div className="">
        <h1>Crea tu propio Pastel</h1>
        <FormularioDeNuevoPedido onIngresar={actualizarLista} />
      </div>
    </>
  );
};

export default IngresoDePedido;
