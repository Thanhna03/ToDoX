import express from "express";
import {createTask, deleteTask, getAllTasks, updateTask} from "../controller/tasksController.js"

const router = express.Router();

//lay du lieu
router.get("/", getAllTasks);

//tao du lieu moi
router.post("/", createTask);

//thay doi va update du lieu
router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;