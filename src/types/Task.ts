export interface Task {
    id: number;
    projectId: number;
    name: string;
    description: string;
    priority: string;
    completed: boolean;
}