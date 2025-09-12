export interface ITask{
    Id: string;
    Title: string;
    Description: string;
    DueDate: Date;
    priority: 'Low' | 'Medium' | 'High';
    Completed: boolean;
}