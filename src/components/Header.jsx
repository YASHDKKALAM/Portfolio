import { navLinks } from "../data/resume";

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <button className="logo" onClick={() => scrollTo("hero")} type="button">
          YK<span className="logo-accent">.</span>
        </button>
        <nav className="nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollTo(link.id)}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
