import { ITask } from "../../domain/Entities/ITask";
import { v4 as uuidv4 } from 'uuid';


export class InMemoryRepository {
    private Tasks: ITask[] = [];
    
    public async CreateTask(task: Omit<ITask, 'Id'>): Promise<ITask> {
        const newTask = {
            ...task,
            Id: uuidv4()
        };
        this.Tasks.push(newTask);
        return newTask;
    }

    public async GetAllTasks(): Promise<ITask[]> {
        return this.Tasks;
    }

    public async UpdateTask(id: string, updatedTask: Partial<Omit<ITask, 'Id'>>): Promise<ITask | null> {
        const taskIndex = this.Tasks.findIndex(task => task.Id === id);
        if (taskIndex === -1) {
            return null;
        }

        this.Tasks[taskIndex] = { ...this.Tasks[taskIndex], ...updatedTask };
        return this.Tasks[taskIndex];
    }

    public async DeleteTask(id: string): Promise<boolean> {
        const initialLength = this.Tasks.length;
        this.Tasks = this.Tasks.filter(task => task.Id !== id);
        return this.Tasks.length < initialLength;
    }


}
