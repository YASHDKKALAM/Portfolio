import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-location">{profile.location}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in Touch
          </a>
          <a
            className="btn btn-secondary"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}
