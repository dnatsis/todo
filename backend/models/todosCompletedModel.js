import mongoose from 'mongoose';

const todosCompletedSchema = mongoose.Schema(
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
      default: true,
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

const TodosCompleted = mongoose.model('TodosCompleted', todosCompletedSchema);

export default TodosCompleted;
