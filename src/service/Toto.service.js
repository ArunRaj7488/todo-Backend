const Todo = require("../model/Todo.model");

/**
 * Create Todo list
 * @Params todoData
 */

createTodo = async (req, res, next) => {
  try {
    const todoData = req["body"];
    const todo = new Todo(todoData);
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
    const todoList = await Todo.find();
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
    const todoList = await Todo.find(query);
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
    const result = await Todo.findOneAndUpdate(
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
    const todoId = req.params["id"];
    const todo = await Todo.findOneAndDelete({ _id: todoId });
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
    const todo = await Todo.deleteMany({ _id: { $in: todoIds } });
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
