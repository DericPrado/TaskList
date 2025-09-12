import { ITask } from "../../domain/Entities/ITask"

export interface ITaskService {
    CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask>

    GetAllTasks(): Promise<ITask[]>

    UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null>

    DeleteTask(id: string): Promise<boolean>
}