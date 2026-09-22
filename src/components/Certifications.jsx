import Section from "./Section";
import { certifications } from "../data/resume";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and completed learning programs"
    >
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <a
              className="cert-image-link"
              href={cert.image}
              rel="noreferrer"
              target="_blank"
            >
              <img alt={`${cert.title} certificate`} className="cert-image" src={cert.image} />
            </a>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
