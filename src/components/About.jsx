import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { education, pillars, profile } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container">
        <SectionHeading
          eyebrow="// about-me"
          title="The person behind the terminal"
          subtitle="Security-first engineering — I learn how systems break so I can build them stronger."
        />

        <div className="about-grid">
          <Reveal variant="left" className="about-card about-card--bio">
            <span className="about-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="about-bio">
              I&apos;m a final-year <strong>Cyber Security (Computer Science)</strong> student at{' '}
              <strong>MITS</strong> with strong programming foundations in <strong>Java, SQL</strong> and full-stack
              development, and hands-on experience across <strong>Web Application Security, VAPT, SOC operations and
              Digital Forensics</strong>.
            </p>
            <p className="about-bio">{profile.objective}</p>
            <div className="about-tags">
              <span>Cisco NetAcad</span>
              <span>Fortinet NSE 1–3</span>
              <span>CrowdStrike</span>
              <span>Palo Alto NetSec</span>
            </div>
          </Reveal>

          <div className="pillars">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} variant="right" delay={index * 90} className="pillar-card">
                <span className="pillar-icon">
                  <Icon name={pillar.icon} size={22} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="education-block">
          <Reveal className="education-label">
            <Icon name="graduation" size={18} />
            <span>Education</span>
          </Reveal>
          <div className="education-grid">
            {education.map((item, index) => (
              <Reveal key={item.school} delay={index * 100} className="education-card">
                <span className="education-icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <div className="education-body">
                  <h3>{item.degree}</h3>
                  <p className="education-school">{item.school}</p>
                  <div className="education-meta">
                    <span className="chip chip--accent">{item.meta}</span>
                    <span className="education-period">{item.period}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
