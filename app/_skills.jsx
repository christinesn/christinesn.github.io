import './_skills.css';
import icons from './_skill_icons.js';

export default function Skills () {
    return (
        <div className="skills">
            <a className="anchor" id="skills">Skills</a>
            <h3>Skills</h3>
            <hr />
            <div className="skills-icons">
                {icons.map(icon => (
                    <div className="icon-entry">
                        <img alt={icon.name + " Icon"} src={icon.icon} />
                        <div className="icon-description">{icon.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}