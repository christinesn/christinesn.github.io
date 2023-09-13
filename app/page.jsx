import Nav from './_nav.jsx';
import Intro from './_intro.jsx';
import Projects from './_projects.jsx';
import Skills from './_skills.jsx';
import './page.css';

export default function Page () {
    return (
        <div className="container">
            <Nav />
            <Intro />
            <Projects />
            <Skills />
        </div>
    )
}