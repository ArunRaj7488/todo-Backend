const Todo = require("../model/Todo.model");

/**
 * Create Todo list
 * @Params todoData
 */

createTodo = async (req, res, next) => {
  try {
    let todoData = req["body"];
    let todo = new Todo(todoData);
    let result = await todo.save();
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
    let todoList = await Todo.find();
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
    let query = req.body;
    let todoList = await Todo.find(query);
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
    let id = req.params["id"];
    let data = req.body;
    let result = await Todo.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true, useFindAndModify: false, runValidators: true }
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
/**
 * Delete single todo By id
 * params @todoId
 */

deleteSingleTodoById = async (req, res, next) => {
  try {
    let todoId = req.params["id"];
    let todo = await Todo.findOneAndDelete({ _id: todoId });
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
    let todoIds = req["body"];
    let todo = await Todo.deleteMany({ _id: { $in: todoIds } });
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
};
