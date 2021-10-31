const TodoModel = require("../model/Todo.model");

/**
 * Create Todo list
 * @Params todoData
 */

createTodo = async (req, res, next) => {
  try {
    const todoData = req["body"];
    const todo = new TodoModel(todoData);
    const result = await todo.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Get All Todo List
 */
getAllTodoList = async (req, res, next) => {
  try {
    const todoList = await TodoModel.find();
    res.send(todoList);
  } catch (error) {
    res.status(400).send(error);
  }
};
/**
 * Get TodoList By query
 * Params @query
 */

getTodoListByQuery = async (req, res, next) => {
  try {
    const query = req.body;
    const todoList = await TodoModel.find(query);
    res.send(todoList);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * update todo list
 * Params @id @data
 */
updateTodo = async (req, res, next) => {
  try {
    const id = req.params["id"];
    const data = req.body;
    const result = await TodoModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true, useFindAndModify: false, runValidators: true }
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update on checked and unchecked all todo list

updateAll = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await TodoModel.updateMany(
      {},
      { $set: data },
      { multi: true }
    );
    res.send(result);
  } catch (error) {
    console.log({ error });
    res.status(400).send(error);
  }
};
/**
 * Delete single todo By id
 * params @todoId
 */

deleteSingleTodoById = async (req, res, next) => {
  try {
    const todoId = req.params["id"];
    const todo = await TodoModel.findOneAndDelete({ _id: todoId });
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * Delete Many todo By theirs Id
 * params @todoId
 */

deleteMayTodoByIds = async (req, res, next) => {
  try {
    const todoIds = req["body"];
    const todo = await TodoModel.deleteMany({ _id: { $in: todoIds } });
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createTodo,
  getAllTodoList,
  getTodoListByQuery,
  updateTodo,
  deleteSingleTodoById,
  deleteMayTodoByIds,
  updateAll,
};
