import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "@reach/router";
import editarPedido from "../actions/editarPedido";
import fetchPedidoPorId from "../actions/fetchPedidoPorId";
import FormularioDePedido from "./FormularioDePedido";
import Nav from "./Nav";

const EditarProducto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { pedidoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPedidoPorId(pedidoId).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [pedidoId]);

  const handleSubmit = async (obj, form) => {
    const { success, message } = await editarPedido(pedidoId, obj);

    console.log({ success });
    if (success) {
      form
        .querySelectorAll(`input:not([type="submit"])`)
        .forEach((input) => (input.value = ""));
      window.alert("Se actualizó el producto exitosamente");
      setTimeout(function () {
        navigate("/lista");
      }, 1000);
    } else {
      window.alert(`No se pudo actualizar. ${message}`);
    }
  };

  if (!productoProps && doesExist)
    return <h1 className="text-light">Espera...</h1>;
  else if (!doesExist) return <h1 className="text-light">No existe</h1>;

  return (
    <div classname="container">
      <Nav />
      <div className="bg-secondary container p-5 rounded">
        <FormularioDePedido
          className="text-light"
          onSubmit={handleSubmit}
          defaultValues={productoProps}
          textoDeBotón="Guardar Cambios"
        />
      </div>
    </div>
  );
};

export default EditarProducto;
