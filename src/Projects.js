import './Projects.css';
import projectsList from './projectsList';

function Projects () {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <hr />
            {projectsList.map(project => (
                <article className="project">
                    <a href={project.link} className="thumbnail" title="Go to live demo"
                        style={{
                            backgroundImage: `url(${project.thumb})`
                        }}
                    />
                    <div className="details">
                        <h3>
                            <a href={project.link} title="Go to live demo">
                                {project.name}
                            </a>
                        </h3>
                        <p className="description">
                            {project.description}
                        </p>
                        <a href={project.github} title="Go to Github repo" className="github">
                            Github
                        </a>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Projects