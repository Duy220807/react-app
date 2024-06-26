const ProjectSummary = ({ project }) => {
    console.log(project)
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Net Ninjas</p>
                <p className="grey-text">3rd September, 2AM</p>
            </div>
        </div>
    );
}

export default ProjectSummary;