const { PedidoModel } = require("../models/Pedido");

const nuevoPedido = async (req, res) => {
  try {
    const { firstName, lastName, address, email, numeroDeOrden } = req.body;

    //const existiente = await PedidoModel.findOne({ firstName });

    //if (existiente) throw new Error("Este producto ya existe");

    const doc = await PedidoModel.create({
      firstName,
      lastName,
      address,
      email,
      numeroDeOrden,
    });

    doc.numeroDeOrden = doc.numeroDeOrden + 1;

    await doc.save();

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoPedido;
