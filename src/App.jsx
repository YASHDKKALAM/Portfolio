import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
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
              Currently working as a Software Engineer at Dassault Systèmes in Pune,
              I focus on building reliable software, improving test coverage, and
              delivering quality releases. Beyond work, I teach on Udemy, create
              content on YouTube, and enjoy building innovative projects.
            </p>
          </div>
        </Section>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
