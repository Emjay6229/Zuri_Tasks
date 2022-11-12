const express = require('express');

const router = express.Router();

const controller = require('../controllers/listController');

router
.post("/", controller.addItem)
.get("/", controller.getAllItems)
.get("/:id", controller.getSingleItem)
.put("/:id", controller.updateList)
.delete("/:id", controller.removeItem);

module.exports = router;