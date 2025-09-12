import { ITaskController } from "./API/Controllers/ITaskController";
import { TaskController } from "./API/Controllers/TaskController";
import { ITaskRoutes } from "./API/Routes/ITaskRoutes";
import { TaskRoutes } from "./API/Routes/TaskRoutes";
import { ITaskService } from "./application/Services/ITaskService";
import { TaskService } from "./application/Services/TaskService";
import { IInMemoryRepository } from "./domain/Repositories/IInMemoryRepository";
import { InMemoryRepository } from "./infra/Repositories/InMemoryRepository";

export class Dependencies {
    private static TaskRepository: IInMemoryRepository = new InMemoryRepository();
    private static TaskService: ITaskService = new TaskService(this.TaskRepository);
    private static TaskController: ITaskController = new TaskController(this.TaskService);
    public static TaskRoutes: ITaskRoutes = new TaskRoutes(this.TaskController);}