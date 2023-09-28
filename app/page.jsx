import Nav from './_nav.jsx';
import Intro from './_intro.jsx';
import Projects from './_projects.jsx';
import Skills from './_skills.jsx';
import Footer from './_footer.jsx';
import Headline from './_headline.jsx';
import Contact from './_contact.jsx';
import './page.css';

export default function Page () {
    return (
        <div className="container">
            <Headline />
            <Nav />
            <Intro />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}