import mongoose from "mongoose";

export const doneSchema = new mongoose.Schema({
    description: {type: String, required: true},
}, {
    timestamps: true,
});

export const DoneTask = mongoose.model("DoneTask", doneSchema)