const { PedidoModel } = require("../models/Pedido");

const eliminarPedido = async (req, res) => {
  try {
    const { pedidoID } = req.params;

    const doc = await PedidoModel.findByIdAndDelete(pedidoID);

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

module.exports = eliminarPedido;
