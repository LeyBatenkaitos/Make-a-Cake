const { PedidoModel } = require("../models/Pedido");

const todosLosPedidos = async (req, res) => {
  try {
    const pedidos = await PedidoModel.find();

    res.json(pedidos);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = todosLosPedidos;
