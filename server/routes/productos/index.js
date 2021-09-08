const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => res.json({ productos: "Conexion Optima" }));
router.put("/:productoID", require("../../controllers/editarProducto"));
router.put("/vender/:productoID", require("../../controllers/venderProducto"));
router.delete("/:productoID", require("../../controllers/eliminarProducto"));
router.post("/nuevo", require("../../controllers/nuevoProducto"));
router.get("/:productoID", require("../../controllers/productoPorId"));
router.get("/", require("../../controllers/todosLosProductos"));

module.exports = router;
