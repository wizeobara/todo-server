import * as Express from "express";
import { DoneTask } from "../models/done-model"

const router = Express.Router();

router.route("/").get((req, res) => {
    DoneTask.find()
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").post((req, res) => {
    const description = req.body.description;
    const newTask = new DoneTask({
        description,
    });

    newTask.save()
    .then(() => res.json("task added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route ("/:id").get((req, res) => {
    DoneTask.findById(req.params.id)
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

export = router;
