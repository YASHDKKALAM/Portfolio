import Section from "./Section";
import { education, languages } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and language proficiency">
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
      <div className="languages">
        <h3>Languages</h3>
        <div className="language-list">
          {languages.map((lang) => (
            <span className="language-chip" key={lang.name}>
              {lang.name} · {lang.level}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
