import React from "react";

const FormularioDeProducto = (props) => {
  const {
    onSubmit = () => {},
    agregar = () => {},
    textoDeBotón = "Ingresar Datos",
    defaultValues = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      colores: [],
    },
  } = props;

  console.log({ propsDeFormulario: props });

  const _onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {};
    for (const [campo, val] of formData.entries()) payload[campo] = val;
    console.log({ payload });
    onSubmit(payload, form);
    agregar();
  };

  return (
    <form className="formulario-de-nuevo-producto " onSubmit={_onSubmit}>
      <label htmlFor="firstName" className="text-black">
        Nombre:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        defaultValue={defaultValues.firstName}
        required
        className="form-control"
      />
      <label htmlFor="lastName" className="text-black">
        Apellido:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        defaultValue={defaultValues.lastName}
        required
        className="form-control"
      />
      <label htmlFor="address" className="text-black">
        Direccion:
      </label>
      <input
        type="text"
        id="address"
        name="address"
        defaultValue={defaultValues.address}
        required
        className="form-control"
      />
      <label htmlFor="email" className="text-black">
        Correo:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        defaultValue={defaultValues.email}
        className="form-control"
      />
      <button type="submit" className="btn btn-success mt-4">
        {textoDeBotón}
      </button>
    </form>
  );
};

export default FormularioDeProducto;
