const express = require("express");
let router = express.Router();
const TodoServices = require("../service/Toto.service");

// Create todo route
router.post("/create", TodoServices.createTodo);
// Get All todo route
router.get("/get/all", TodoServices.getAllTodoList);
// Get by query todo route
router.post("/get/by/query", TodoServices.getTodoListByQuery);
// update todo route
router.put("/update/:id", TodoServices.updateTodo);
// update on all select and deselect route
router.post("/update/all-marked", TodoServices.updateAll);

// Delete single  todo route
router.delete("/delete/single/:id", TodoServices.deleteSingleTodoById);
// Delete more than one todo route
router.post("/delete/multiple", TodoServices.deleteMayTodoByIds);

module.exports = router;
