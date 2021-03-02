import * as Express from "express";
import { Task } from "../models/task-model"

const router = Express.Router();

router.route("/").get((req, res) => {
    Task.find()
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").post((req, res) => {
    const description = req.body.description;
    const newTask = new Task({
        description,
    });

    newTask.save()
    .then(() => res.json("task added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route ("/:id").get((req, res) => {
    Task.findById(req.params.id)
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(() => res.json ("task deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
    Task.findById(req.params.id)
    .then((task: any) => {
        task.description = req.body.description;

        task.save()
        .then(() => res.json("task updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

export = router;
