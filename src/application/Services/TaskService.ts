import { ITask } from "../../domain/Entities/ITask";
import { IInMemoryRepository } from "../../domain/Repositories/IInMemoryRepository";
import { ITaskService } from "./ITaskService";

export class TaskService implements ITaskService {
    private repository: IInMemoryRepository;

    constructor(repository: IInMemoryRepository) {
        this.repository = repository;
    }
    public async CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask> {
        return this.repository.CreateTask(task);
    }

    public async GetTaskById(id: string): Promise<ITask | null> {
        return this.repository.GetTaskById(id);
    }

    public async GetAllTasks(): Promise<ITask[]> {
        return this.repository.GetAllTasks();
    }

    public async UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null> {
        return this.repository.UpdateTask(id, updatedTask);
    }

    public async DeleteTask(id: string): Promise<boolean> {
        return this.repository.DeleteTask(id);
    }
}