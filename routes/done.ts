import * as Express from "express";
import { Task } from "../models/task-model"

const router = Express.Router();

router.route("/").get((req, res) => {
    Task.find()
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route ("/:id").get((req, res) => {
    Task.findById(req.params.id)
    .then ((task) => res.json(task))
    .catch((err) => res.status(400).json("Error:" + err));
});

export = router;
