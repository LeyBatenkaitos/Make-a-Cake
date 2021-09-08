const { ProductoModel } = require("../models/Producto");

const editarProducto = async (req, res) => {
  try {
    const { productoID } = req.params;
    const { nombreProducto, precio, descripcion, colores } = req.body;

    const doc = await ProductoModel.findByIdAndUpdate(productoID, {
      nombreProducto,
      precio,
      descripcion,
      colores,
    });

    if (!doc)
      return res
        .status(404)
        .json({ message: "No se encontró ni se eliminó el producto deseado" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = editarProducto;
