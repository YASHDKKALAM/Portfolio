import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile } from "./data/resume";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About Me" subtitle="Who I am and what I do">
          <div className="about-content">
            <p>{profile.summary}</p>
            <p>
              Currently working as a Software Engineering Specialist at Dassault Systèmes,
              I focus on enterprise software development, test automation, Python solutions,
              and AI-powered applications. Beyond work, I teach on Udemy, mentor students,
              and create technology content on programming and engineering.
            </p>
          </div>
        </Section>
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
