import './Skills.css';
import skillsList from './skillsList';

function Skills () {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <hr />
            {skillsList.map(type => (
                <section key={type.section}>
                    <h4>{type.section}</h4>
                    <div className="icons">
                        {type.skills.map(skill => (
                            <div className="skill" key={skill.name}>
                                <img alt={skill.name} src={skill.icon} />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}

export default Skills