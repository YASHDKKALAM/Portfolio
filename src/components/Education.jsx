import Section from "./Section";
import { education } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background">
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={`${item.degree}-${item.period}`}>
            <h3>{item.degree}</h3>
            <p className="education-school">{item.school}</p>
            <p className="education-period">{item.period}</p>
            {item.details && <p className="education-details">{item.details}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
