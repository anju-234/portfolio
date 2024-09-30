
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
