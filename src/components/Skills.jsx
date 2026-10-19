import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups, toolbelt } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-label="Skills">
      <div className="container">
        <SectionHeading
          eyebrow="// capabilities"
          title="Skills & security toolbelt"
          subtitle="From writing the code to breaking it — and then defending it."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 90} className="skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="chips">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="toolbelt" delay={100}>
          <p className="toolbelt-label">
            <Icon name="zap" size={15} /> Daily drivers
          </p>
          <div className="toolbelt-marquee" aria-hidden="true">
            <div className="toolbelt-track">
              {[...toolbelt, ...toolbelt].map((tool, index) => (
                <span className="toolbelt-item" key={`${tool}-${index}`}>
                  {tool}
                  <span className="toolbelt-sep">◆</span>
                </span>
              ))}
            </div>
          </div>
          <ul className="visually-hidden">
            {toolbelt.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
