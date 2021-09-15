import { useNavigate } from "@reach/router";
import React from "react";
import crearNuevoPedido from "../actions/crearNuevoPedido";
import FormularioDePedido from "./FormularioDePedido";

const FormularioDeNuevoPedido = () => {
  const navigate = useNavigate();
  const crearProducto = async (payload, form) => {
    const { success, message } = await crearNuevoPedido(payload);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se ingresó el producto exitosamente");
    } else {
      window.alert(`No se ingresó. ${message}`);
    }
  };
  const onAgregar = () => {
    setTimeout(function () {
      navigate("/"); //colocar ruta de creacion de tortas
    }, 2000);
  };

  return <FormularioDePedido onSubmit={crearProducto} agregar={onAgregar} />;
};

export default FormularioDeNuevoPedido;
