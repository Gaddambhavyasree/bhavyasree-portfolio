import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects, profile } from '../data/portfolio.js'

function ProjectCard({ project, index }) {
  const cardClass = `project-card ${project.featured ? 'project-card--featured' : ''}`

  return (
    <Reveal delay={(index % 2) * 100} className={cardClass}>
      <div className={`project-media ${project.image ? '' : 'project-media--icon'}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />
        ) : (
          <span className="project-glyph">
            <Icon name={project.featured ? 'sparkles' : 'shield'} size={44} />
          </span>
        )}
        {project.featured ? <span className="featured-badge">Featured</span> : null}
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((point) => (
            <li key={point}>
              <Icon name="check" size={14} />
              {point}
            </li>
          ))}
        </ul>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span className="chip chip--small" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.label} className="project-link" href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={16} />
                {link.label}
                <Icon name="external" size={13} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <SectionHeading
          eyebrow="// projects"
          title="Things I've built & broken"
          subtitle="Security tooling, automation and full-stack products — engineered end to end."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal className="projects-cta" delay={120}>
          <p>More experiments, CTF write-ups and tools live on GitHub.</p>
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={18} />
            Explore GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
