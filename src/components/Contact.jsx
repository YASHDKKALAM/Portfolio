import Section from "./Section";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's connect and build something great">
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="contact-label">Email</span>
          <span className="contact-value">{profile.email}</span>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <span className="contact-label">Phone</span>
          <span className="contact-value">{profile.phone}</span>
        </a>
        <a
          className="contact-card"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">yash-kalam-885a1a208</span>
        </a>
        <div className="contact-card contact-card-static">
          <span className="contact-label">Location</span>
          <span className="contact-value">{profile.location}</span>
        </div>
      </div>
    </Section>
  );
}
