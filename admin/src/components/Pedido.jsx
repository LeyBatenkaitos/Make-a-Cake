import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "@reach/router";
import fetchProductoPorId from "../actions/fetchPedidoPorId";
import Nav from "./Nav";
import BotonEliminar from "./BotonEliminar";

const Producto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { pedidoId } = useParams();
  const navigate = useNavigate();

  const onDelete = () => {
    window.alert(`Se elimino el pedido exitosamente`);
    navigate("/lista");
  };

  useEffect(() => {
    fetchProductoPorId(pedidoId).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [pedidoId]);

  if (!productoProps && doesExist)
    return <h1 className="text-black">Espera...</h1>;
  else if (!doesExist) return <h1 className="text-black">No existe</h1>;
  else
    return (
      <>
        <Nav />
        <div className="bg-black container rounded p-2 mt-3 ">
          <div className="row">
            <h1 className="col-md-8">
              Detalles sobre: {productoProps.firstName}
            </h1>
            <BotonEliminar
              _id={pedidoId}
              onSuccess={onDelete}
              className="col-6 col-sm-4 "
            >
              {" "}
              Eliminar Pedido
            </BotonEliminar>
          </div>
        </div>
        <div className="vista-de-producto rounded mt-3 p-3 container">
          <h4 className="text-center ">Apellido: {productoProps.lastName}</h4>
          <h4 className="text-center">Direccion: {productoProps.address}</h4>
        </div>
      </>
    );
};

export default Producto;
