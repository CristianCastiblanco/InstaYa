const express = require ("express");
const router = express.Router();
const checkAuth = require("../middlewares/checkAuth");
const {Mostrar, OrderService} = require("../controllers/privateControllers");

router.post("/order", OrderService);

router.get("/mostrardatos", checkAuth, Mostrar);

module.exports = router;