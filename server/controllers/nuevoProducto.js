const { ProductoModel } = require("../models/Producto");

const nuevoProducto = async (req, res) => {
  try {
    const { nombreProducto, precio, descripcion, colores } = req.body;

    const existiente = await ProductoModel.findOne({ nombreProducto });

    if (existiente) throw new Error("Este producto ya existe");

    const doc = await ProductoModel.create({
      nombreProducto,
      precio,
      descripcion,
      colores: colores.filter(Boolean),
      inventario: 0,
    });

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoProducto;
