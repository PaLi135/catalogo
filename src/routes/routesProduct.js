const express = require ("express");
const router = express.Router ();
const controllersProduct = require("../controllers/controllersProduct");

router.get ('/', controllersProduct.raiz);
//router.get ('/nosotros', controllersProduct.nosotros);

module.exports = router;