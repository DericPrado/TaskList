import { ITask } from "../../domain/Entities/ITask"

export interface ITaskController {
    CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask>

    GetAllTasks(): Promise<ITask[]>

    GetTaskById(id: string): Promise<ITask | null>

    UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null>

    DeleteTask(id: string): Promise<boolean>
}