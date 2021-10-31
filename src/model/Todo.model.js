const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    enum: [true, false],
  },
});

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;
