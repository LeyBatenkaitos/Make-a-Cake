import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import fetchProductos from "../actions/fetchProductos";

const ListaDeProductos = (props) => {
  const { ingresarNuevoProducto, onActualizar } = props;
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchProductos().then(({ data }) => {
      const elementos = data
        .sort(({ precio: ta }, { precio: tb }) => {
          if (ta < tb) return -1;
          if (ta > tb) return 1;
          return 0;
        })
        .map(({ nombreProducto, precio, _id }) => (
          <tbody>
            <td>{nombreProducto}</td>
            <td>{precio}</td>
            <Link
              className="text-light btn btn-info ml-2 mt-2 mb-2"
              to={`/${_id}`}
            >
              Detalles
            </Link>
            <Link
              className="btn btn-warning  mt-2 mb-2 ml-3 "
              to={`/${_id}/editar`}
            >
              Editar
            </Link>
          </tbody>
        ));
      setLista(elementos);
    });
  }, [ingresarNuevoProducto, onActualizar]);

  return (
    <div className="lista-de-productos p-6 container">
      <h1 className="text-light ">
        Hay algunas mascotas que estan buscando por un buen lugar
      </h1>
      <table className="table table-bordered bg-secondary mt-4 rounded-top ">
        <thead className="thead-light">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        {lista}
      </table>
    </div>
  );
};

export default ListaDeProductos;
