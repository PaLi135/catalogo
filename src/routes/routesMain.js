const express = require ("express");
const router = express.Router ();
const controllersMain = require("../controllers/controllersMain");

router.get ('/', controllersMain.raiz);
router.get ('/index', controllersMain.raiz)
//router.get ('/nosotros', controllersMain.nosotros);

module.exports = router;