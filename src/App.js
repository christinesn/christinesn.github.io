import './App.css';
import TopLine from './TopLine';
import Footer from './Footer';
import Nav from './Nav';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

function App () {
    return (
        <div className="container">
            <TopLine />
            <Nav />
            <main>
                <Intro />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div>
    )
}

export default App