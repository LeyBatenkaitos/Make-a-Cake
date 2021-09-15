import React from "react";
import eliminarPedido from "../actions/eliminarPedido";

const EliminarBoton = (props) => {
  const {
    onSuccess = () => {},
    onError = () => {
      window.alert("Hubo un error Eliminando el producto");
    },
    _id,
    esCenter = false,
    children = "Eliminar Producto",
  } = props;

  const onClick = async () => {
    try {
      await eliminarPedido(_id);
      onSuccess();
    } catch (e) {
      console.error(e);
      onError();
    }
  };

  return (
    <button
      onClick={onClick}
      className={(esCenter ? "btn-center " : "") + "btn-danger rounded"}
    >
      {children}
    </button>
  );
};

export default EliminarBoton;
