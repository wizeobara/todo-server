import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
        description: {type: String, requried: true},
}, {
    timestamps: true,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
