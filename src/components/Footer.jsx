import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="footer-note">Built with React & Vite</p>
      </div>
    </footer>
  );
}
