const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus recusandae? Quos recusandae dolorum distinctio labore beatae quasi deleniti impedit, possimus est voluptatum dolor rerum in maxime dolore quae explicabo?</p>
                </div>
                <div className="card-action gret lignten-4 grey-text">
                    <div>Posted by the Net Ninjas</div>
                    <div>2nd September, 2AM</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;