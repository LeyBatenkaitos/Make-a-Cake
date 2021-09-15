const { PedidoModel } = require("../models/Pedido");

const editarProducto = async (req, res) => {
  try {
    const { pedidoID } = req.params;
    const { firstName, lastName, address, email } = req.body;

    const doc = await PedidoModel.findByIdAndUpdate(pedidoID, {
      firstName,
      lastName,
      address,
      email,
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
