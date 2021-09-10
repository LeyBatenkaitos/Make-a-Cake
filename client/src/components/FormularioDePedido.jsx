import React from "react";

const FormularioDeProducto = (props) => {
  const {
    onSubmit = () => {},
    agregar = () => {},
    textoDeBotón = "Añadir Nueva Mascota",
    defaultValues = {
      nombreProducto: "",
      precio: "",
      descripcion: "",
      colores: [],
    },
  } = props;

  console.log({ propsDeFormulario: props });

  const _onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = { colores: formData.getAll("color").filter(Boolean) };
    for (const [campo, val] of formData.entries()) payload[campo] = val;
    console.log({ payload });
    onSubmit(payload, form);
    agregar();
  };

  return (
    <form className="formulario-de-nuevo-producto " onSubmit={_onSubmit}>
      <label htmlFor="nombreProducto" className="text-light">
        Nombre De Mascota:
      </label>
      <input
        type="text"
        id="nombreProducto"
        name="nombreProducto"
        defaultValue={defaultValues.nombreProducto}
        required
        className="form-control"
      />
      <label htmlFor="precio" className="text-light">
        Tipo de Mascota:
      </label>
      <input
        type="text"
        id="precio"
        name="precio"
        defaultValue={defaultValues.precio}
        required
        className="form-control"
      />
      <label htmlFor="descripcion" className="text-light">
        Descripción de Mascota:
      </label>
      <input
        type="text"
        id="descripcion"
        name="descripcion"
        defaultValue={defaultValues.descripcion}
        required
        className="form-control"
      />
      <label htmlFor="color-1" className="text-light">
        Habilidad 1:
      </label>
      <input
        type="text"
        id="color-1"
        name="color"
        defaultValue={defaultValues.colores[0]}
        className="form-control"
      />
      <label htmlFor="color-2" className="text-light">
        Habilidad 2:
      </label>
      <input
        type="text"
        id="color-2"
        name="color"
        defaultValue={defaultValues.colores[1]}
        className="form-control"
      />
      <label htmlFor="color-3" className="text-light">
        Habilidad 3:
      </label>
      <input
        type="text"
        id="color-3"
        name="color"
        defaultValue={defaultValues.colores[2]}
        className="form-control"
      />
      <button type="submit" className="btn btn-success mt-4">
        {textoDeBotón}
      </button>
    </form>
  );
};

export default FormularioDeProducto;