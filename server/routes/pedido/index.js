const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => res.json({ productos: "Conexion Optima" }));
router.put("/:pedidoID", require("../../controllers/editarPedido"));
router.delete("/:pedidoID", require("../../controllers/eliminarPedido"));
router.post("/nuevo", require("../../controllers/nuevoPedido"));
router.get("/:pedidoID", require("../../controllers/pedidoPorId"));
router.get("/", require("../../controllers/todosLosPedidos"));

module.exports = router;
