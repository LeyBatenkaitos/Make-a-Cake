const mongoose = require("mongoose");
const ProductoSchema = new mongoose.Schema(
  {
    nombreProducto: {
      //antes era titulo
      type: String,
      required: [true, "La Mascota Necesita un nombre :c"],
      maxLength: [
        50,
        "La Mascota sólo puede tener hasta 50 caracteres, se ingresó {VALUE}",
      ],
      minLength: [
        3,
        "La Mascota debe tener por lo menos 3 caracteres, se ingresó {VALUE}",
      ],
      unique: [true, "La Mascota ya Existe por ese nombre. "],
    },
    precio: {
      type: String,
      required: [true, "El animal Necesita una Raza"],
      minLength: [
        3,
        "La Mascota debe tener por lo menos 3 caracteres, se ingresó {VALUE}",
      ],
    },
    descripcion: {
      type: String,
      required: [
        true,
        "La mascota necesita una descripcion minima de 25 caracteres",
      ],
      maxLength: [
        500,
        "La descripción de la mascota solo puede tener hasta 500 caracateres, se ingresó {VALUE}",
      ],
      minLength: [
        25,
        "La descripción de la mascota debe tener por lo menos 25 caracateres, se ingresó {VALUE}",
      ],
    },
    colores: [
      {
        type: String,
        minLength: [
          3,
          "si colocas una habilidad de la mascota minimo tiene que tener 3 caracteres, ingresastes {VALUE} ",
        ],
      },
    ],
    inventario: {
      type: Number,
      min: [0, "No puedes tener menos de 1 articulo"],
    },
  },
  { timestamps: true }
);

const ProductoModel = mongoose.model("producto", ProductoSchema);

module.exports = { ProductoSchema, ProductoModel };
