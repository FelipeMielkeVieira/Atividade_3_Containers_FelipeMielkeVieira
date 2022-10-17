const express = require("express");
const router = express.Router();

const productsHandler = require("./productsHandler");

router.get("/", (req, res) => {
  productsHandler.retornarProdutos().then((resposta) => res.json(resposta));
});

router.post("/", (req, res) => {
  productsHandler
    .adicionarProduto(req.body)
    .then((resposta) => res.json(resposta))
    .catch((err) => res.json(err.message));
});

module.exports = router;