const express = require("express");
const { getItems, createItem, updateItem, deleteItem } = require("../controllers/user");

const router = express.Router();

router.get("/", getItems);            // Listar todos os itens
router.post("/", createItem);         // Criar novo item
router.put("/:id", updateItem);       // Atualizar item
router.delete("/:id", deleteItem);    // Excluir item

module.exports = router;
