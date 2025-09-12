import { ITaskService } from "../../application/Services/ITaskService";
import { ITask } from "../../domain/Entities/ITask";
import { ITaskController } from "./ITaskController";

export class TaskController implements ITaskController {
    private taskService: ITaskService;

    constructor(taskService: ITaskService) {
        this.taskService = taskService;
    }
    
        CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask> {
        return this.taskService.CreateTask(task);
        }
    
        GetAllTasks(): Promise<ITask[]> {
        return this.taskService.GetAllTasks();
        }
    
        UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null> {
        return this.taskService.UpdateTask(id, updatedTask);
        }
    
        DeleteTask(id: string): Promise<boolean> {
        return this.taskService.DeleteTask(id);
        }
    
}