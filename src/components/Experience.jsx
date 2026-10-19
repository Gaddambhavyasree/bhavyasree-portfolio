import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt" aria-label="Experience">
      <div className="container">
        <SectionHeading
          eyebrow="// experience"
          title="Where I've made an impact"
          subtitle="Three internships across SOC operations, offensive security and full-stack development."
        />

        <ol className="timeline">
          {experience.map((job, index) => (
            <Reveal
              key={job.company}
              as="li"
              variant={index % 2 === 0 ? 'left' : 'right'}
              className="timeline-item"
            >
              <span className="timeline-node" aria-hidden="true">
                <Icon name={job.icon} size={18} />
              </span>
              <article className="timeline-card">
                <header className="timeline-head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      <span className="timeline-mode">
                        <Icon name="map-pin" size={13} />
                        {job.mode}
                      </span>
                    </p>
                  </div>
                  <span className="timeline-index" aria-hidden="true">
                    0{experience.length - index}
                  </span>
                </header>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>
                      <Icon name="arrow-right" size={13} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {job.tags.map((tag) => (
                    <span className="chip chip--small" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
