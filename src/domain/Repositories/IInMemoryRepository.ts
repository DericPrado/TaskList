import { ITask } from "../Entities/ITask"

export interface IInMemoryRepository {
    CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask>

    GetTaskById(id: string): Promise<ITask | null>

    GetAllTasks(): Promise<ITask[]>

    UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null>

    DeleteTask(id: string): Promise<boolean>
}