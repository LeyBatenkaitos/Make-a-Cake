import { useNavigate } from "@reach/router";
import React from "react";
import crearNuevoProducto from "../actions/crearNuevoProducto";
import FormularioDeProducto from "./FormularioDeProducto";

const FormularioDeNuevoProducto = (props) => {
  const navigate = useNavigate();
  const { onIngresar } = props;
  const crearProducto = async (payload, form) => {
    const { success, message } = await crearNuevoProducto(payload);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se ingresó el producto exitosamente");
      onIngresar();
    } else {
      window.alert(`No se ingresó. ${message}`);
    }
  };
  const onAgregar = () => {
    setTimeout(function () {
      navigate("/");
    }, 2000);
  };

  return <FormularioDeProducto onSubmit={crearProducto} agregar={onAgregar} />;
};

export default FormularioDeNuevoProducto;