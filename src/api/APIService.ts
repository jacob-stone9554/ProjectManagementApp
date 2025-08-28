import type {Project} from "../types/Project.ts";
//const API_URL = "https://not/sure/what/the/url/will/be";

const dummyData: Project[] = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Update landing page and improve navigation",
        tasks: [{
            id: 101,
            projectId: 1,
            name: "Create wireframes",
            description: "Design wireframes for new homepage and about page.",
            priority: "High",
            completed: false,
        },
        {
            id: 102,
            projectId: 1,
            name: "Set up hosting",
            description: "Provision hosting environment for deployment.",
            priority: "Medium",
            completed: true,
        },
    ],
    },
    {
        id: 2,
        name: "Mobile App Launch",
        description: "Develop and release v1 of the mobile application.",
        tasks:  [
            {
                id: 201,
                projectId: 2,
                name: "Design login flow",
                description: "Create UX for login, registration, and password reset.",
                priority: "High",
                completed: false,
            },
            {
                id: 202,
                projectId: 2,
                name: "Implement notifications",
                description: "Add push notification support using Firebase.",
                priority: "Low",
                completed: false,
            },
        ],
    }
];

export const APIService = {
    getProjects: async (): Promise<Project[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(dummyData), 500);
        })
    }
}