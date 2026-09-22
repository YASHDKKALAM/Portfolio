import Section from "./Section";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Professional journey and impact">
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={`${job.role}-${job.period}`}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
