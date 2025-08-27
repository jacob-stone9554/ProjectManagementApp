function Projects() {
    return(
        <div className="bg-white w-5/6 h-5/6 rounded-2xl flex flex-row justify-evenly items-center">
            <div className="flex flex-col items-center justify-start pt-10 h-full">
                <h1 className="text-2xl">List of projects will go here</h1>
                <p>Clicking on the projects will open a list of tasks on the right</p>
            </div>
            <div className="flex flex-col items-center justify-start pt-10 h-full">
                <h1 className="text-2xl">List of tasks will go here</h1>
                <p>This area will be populated when a project is selected</p>
            </div>
        </div>
    )
}

export default Projects;