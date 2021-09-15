const eliminarPedido = async (id) => {
  try {
    const resultado = await fetch(`/api/pedido/${id}`, {
      method: "DELETE",
    });

    const obj = await resultado.json();
    if (!resultado.ok) throw new Error(obj.message);

    return { success: true };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default eliminarPedido;
