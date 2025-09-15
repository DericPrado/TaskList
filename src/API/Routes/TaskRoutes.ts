import { Router } from "express";
import { ITaskController } from "../Controllers/ITaskController";
import { ITaskRoutes } from "./ITaskRoutes";

export class TaskRoutes implements ITaskRoutes {
    private Routes: Router;
    private TaskController: ITaskController;

    constructor(TaskController: ITaskController) {
        this.Routes = Router();
        this.TaskController = TaskController;
        this.GetTaskRoutes();
    }
    public GetRoutes(): Router {
        return this.Routes;
    }

    private GetTaskRoutes() {
        this.Routes.post('/AddTask', async (req, res) => {
            const task = req.body;
            const createdTask = await this.TaskController.CreateTask(task);
            res.status(201).json(createdTask);
        });

        this.Routes.get('/GetTask/:id', async (req, res) => {
            const { id } = req.params;
            const task = await this.TaskController.GetTaskById(id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        });

        this.Routes.get('/GetAllTasks', async (req, res) => {
            const tasks = await this.TaskController.GetAllTasks();
            res.status(200).json(tasks);
        });

        this.Routes.put('/UpdateTask/:id', async (req, res) => {
            const { id } = req.params;
            const updatedTaskData = req.body;
            const updatedTask = await this.TaskController.UpdateTask(id, updatedTaskData);
            if (updatedTask) {
                res.status(200).json(updatedTask);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        });

        this.Routes.delete('/DeleteTask/:id', async (req, res) => {
            const { id } = req.params;
            const isDeleted = await this.TaskController.DeleteTask(id);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        });
    }
}