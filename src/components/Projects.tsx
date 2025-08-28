import { useEffect, useState } from "react";
import {type Project} from "../types/Project.ts";
import {type Task} from "../types/Task.ts";
import {APIService} from "../api/APIService.ts";

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    useEffect(() => {
        APIService.getProjects().then(setProjects);
    }, []);

    return(
        <div className="bg-white w-5/6 h-5/6 rounded-2xl flex flex-row justify-evenly items-center">
            <div className="flex flex-col items-center justify-start pt-10 h-full">
                <h1 className="text-2xl">List of projects will go here</h1>
                <p>Clicking on the projects will open a list of tasks on the right</p>
                <div className="flex flex-col items-center justify-start pt-10 h-50 w-full">
                    {projects.map((p) => (
                        <div className={`flex flex-col items-center border-1 w-full h-full
                            ${selectedProject === p ? "bg-purple-300" : "bg-white hover:bg-gray-100"}`}
                        key={p.id}
                        onClick={() => setSelectedProject(p)}>
                            <h2 className="mt-1 mb-2">{p.name}</h2>
                            <p>{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-10 h-full">
                <h1 className="text-2xl">List of tasks will go here</h1>
                <p>This area will be populated when a project is selected</p>
                <div>
                    {selectedProject ? (
                        selectedProject.tasks.map((task: Task) => (
                            <div key={task.id}>
                                <p>{task.name}</p>
                            </div>
                        ))
                    ) : (
                        <p>Please select a project to view its tasks</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;