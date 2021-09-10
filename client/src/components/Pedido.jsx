import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "@reach/router";
import fetchProductoPorId from "../actions/fetchProductoPorId";
import venderProducto from "../actions/venderProducto";
import Nav from "./Nav";
import EliminarBoton from "./EliminarBoton";

const Producto = () => {
  const [productoProps, setProductoProps] = useState(null);
  const [doesExist, setDoesExist] = useState(true);
  const { productoID } = useParams();
  const navigate = useNavigate();

  const onDelete = () => {
    window.alert(`Se Adopto la Mascota exitosamente`);
    navigate("/");
  };

  useEffect(() => {
    fetchProductoPorId(productoID).then((res) => {
      const { success } = res;
      if (success) setProductoProps(res.data);
      else setDoesExist(false);
    });
  }, [productoID]);

  const vender = async () => {
    const { success, data } = await venderProducto(productoID);
    if (success) setProductoProps(data);
  };

  if (!productoProps && doesExist)
    return <h1 className="text-light">Espera...</h1>;
  else if (!doesExist) return <h1 className="text-light">No existe</h1>;
  else
    return (
      <>
        <Nav />
        <div className="bg-white container rounded p-2 mt-3 ">
          <div className="row">
            <h1 className="col-md-8">
              Detalles sobre: {productoProps.nombreProducto}
            </h1>
            <EliminarBoton
              _id={productoID}
              onSuccess={onDelete}
              className="col-6 col-sm-4 "
            >
              {" "}
              Adoptar animal
            </EliminarBoton>
          </div>
        </div>
        <div className="vista-de-producto rounded mt-3 p-3 container">
          <h4 className="text-center ">Raza: {productoProps.precio}</h4>
          <h4 className="text-center">
            Descripcion: {productoProps.descripcion}
          </h4>

          <div className="container ">
            <h2 className="col align-self-center text-center  ">
              Habilidades:
            </h2>
            <ul className=" row  ">
              {" "}
              {productoProps.colores.map((c, i) => (
                <li className="col-lg " key={i}>
                  <h5>{c}</h5>
                </li>
              ))}
            </ul>
            <div className="row">
              <h3 className="text-center col-sm-8">
                Likes: {productoProps.inventario}
              </h3>
              <button className="btn btn-success col-sm-4 " onClick={vender}>
                Darle Like a {productoProps.nombreProducto}
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Producto;
