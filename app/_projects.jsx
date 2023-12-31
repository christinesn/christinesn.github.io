import projectList from './_projects_details.js';
import './_projects.css';

export default function Projects () {
    return (
        <div className="projects">
            <a id="projects" className="anchor">Projects</a>
            <h3>Projects</h3>
            <hr />
            {projectList.map(project => {
                return (
                    <div className="project-container">
                        <a href={project.link} className="project-image" 
                            style={{
                                backgroundImage: `url(${project.thumb})`
                            }} />
                        <div className="project-info">
                            <div className="project-name">
                                <a href={project.link}>{project.name}</a>
                            </div>
                            <div className="project-description">
                                {project.description}
                            </div>
                            <div className="project-links">
                                <a href={project.github}>Github Repo</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}