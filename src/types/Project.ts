import type {Task} from "./Task.ts";

export interface Project {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
}