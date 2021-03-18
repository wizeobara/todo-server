import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema(
  {
    completed: { type: Boolean, required: true },
    title: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

taskSchema.add({ child: [taskSchema] });

export const Task = mongoose.model("Task", taskSchema);
