import mongoose from 'mongoose';

const todosSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      required: true,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    sessions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.model('Todos', todosSchema);

export default Todos;
