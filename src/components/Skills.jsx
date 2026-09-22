import Section from "./Section";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and strengths I bring to every project">
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
