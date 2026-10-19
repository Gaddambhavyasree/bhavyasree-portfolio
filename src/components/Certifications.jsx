import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { achievements, certifications } from '../data/portfolio.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications and achievements">
      <div className="container">
        <SectionHeading
          eyebrow="// credentials"
          title="Certifications & achievements"
          subtitle="Verified credentials and competition results that back the skills."
        />

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <Reveal key={`${cert.title}-${cert.issuer}`} delay={(index % 3) * 70} variant="zoom" className="cert-card">
              <span className="cert-icon">
                <Icon name={cert.icon} size={22} />
              </span>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <Icon name="badge" size={18} className="cert-badge" />
            </Reveal>
          ))}
        </div>

        <div className="achievements-block">
          <Reveal className="achievements-label">
            <Icon name="trophy" size={18} />
            <span>Competitions & honors</span>
          </Reveal>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80} className="achievement-card">
                <span className="achievement-rank" aria-hidden="true">
                  #{String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
