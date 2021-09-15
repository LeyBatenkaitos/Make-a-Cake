const { PedidoModel } = require("../models/Pedido");

const pedidoPorId = async (req, res) => {
  try {
    const { pedidoID } = req.params;

    const doc = await PedidoModel.findById(pedidoID);

    if (!doc) return res.status(404).json({ message: "El Producto no Existe" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = pedidoPorId;
