import { Icon } from './Icons.jsx'
import { navLinks, profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">
              <Icon name="shield" size={18} />
            </span>
            <span className="brand-text">
              Bhavya<span className="brand-accent">.Sec</span>
            </span>
          </a>
          <p>
            Cyber Security Engineer · AI Security Enthusiast · Full Stack Developer
            <br />
            Madanapalle, Andhra Pradesh, India
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="footer-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" size={20} />
            </a>
          </div>
          <a className="btn btn-outline btn-sm" href={profile.resumeUrl} download={profile.resumeFileName}>
            <Icon name="download" size={15} /> Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Bhavya Sree Gaddam · All rights reserved.</p>
          <p className="footer-built">
            Built with React <span aria-hidden="true">◆</span> Secured by curiosity
          </p>
        </div>
      </div>
    </footer>
  )
}
