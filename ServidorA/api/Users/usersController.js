const express = require("express");
const router = express.Router();

const usersHandler = require("./usersHandler");

router.get("/todos", (req, res) => {
  usersHandler.retornarUsuarios().then((resposta) => res.json(resposta));
});

router.post("/", (req, res) => {
  usersHandler
    .retornarUsuario(req.body)
    .then((resposta) => res.json(resposta))
    .catch((erro) => res.status(500).json(erro));
});

router.post("/novo", (req, res) => {
  usersHandler
    .adicionarUsuario(req.body)
    .then((resposta) => res.json(resposta)).catch((erro) => res.status(500).json(erro));
});

module.exports = router;