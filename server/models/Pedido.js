const mongoose = require("mongoose");
const PedidoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "El pedido necesitara un nombre para agendarlo "],
      maxLength: [
        30,
        "El pedido tiene que tener menos de 30 letras, se ingresaron {VALUE}",
      ],
      minLength: [
        3,
        "El producto necesita un minimo de 3 letras, ingresaste {VALUE} ",
      ],
      unique: [true, "La Mascota ya Existe por ese nombre. "],
    },
    lastName: {
      type: String,
      required: [true, "El pedido necesitara un apellido para agendarlo"],
      minLength: [
        3,
        " El producto necesita un precio minimo de 100 Pesos, ingresaste {VALUE} pesos",
      ],
    },
    address: {
      type: String,
      required: [true, "El pedido necesita una direccion para agendarlo"],
      maxLength: [
        200,
        "La descripción del producto tiene que tener maximo 200 caracteres, se ingresaron {VALUE} ",
      ],
      minLength: [
        5,
        "La descripción del producto minimo necesita 5 caracateres, se ingresaron {VALUE}",
      ],
    },
    email: {
      type: String,
      required: [true, "Se necesita un email para agendar el pedido"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Porfavor ingrese un Email Valido",
      },
    },
    numeroDeOrden: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PedidoModel = mongoose.model("pedido", PedidoSchema);

module.exports = { PedidoSchema, PedidoModel };
