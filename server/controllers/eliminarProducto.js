const { ProductoModel } = require("../models/Producto");

const eliminarProducto = async (req, res) => {
  try {
    const { productoID } = req.params;

    const doc = await ProductoModel.findByIdAndDelete(productoID);

    if (!doc)
      return res
        .status(404)
        .json({ message: "No se encontro ni elimino el producto" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = eliminarProducto;