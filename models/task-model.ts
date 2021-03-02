import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
    description: {type: String, required: true},
}, {
    timestamps: true,
});

export const Task = mongoose.model("Task", taskSchema)