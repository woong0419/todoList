const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  description: String,
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
