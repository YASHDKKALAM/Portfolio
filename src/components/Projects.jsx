import Section from "./Section";
import { projects, awards, extracurriculars } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" title="Projects & Achievements" subtitle="Selected work, awards, and community impact">
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="highlights-grid">
        <article className="highlight-card">
          <h3>Awards</h3>
          <ul>
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </article>
        <article className="highlight-card">
          <h3>Extra Curriculars</h3>
          <ul>
            {extracurriculars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
