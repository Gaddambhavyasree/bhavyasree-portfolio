import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { profile, stats } from '../data/portfolio.js'

function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 38, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    const word = words[index % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)))
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

const terminalLines = [
  { prompt: 'bhavya@sec', cmd: 'whoami' },
  { out: 'cybersecurity engineer · cloud security · full stack' },
  { prompt: 'bhavya@sec', cmd: 'status --availability' },
  { out: 'open to SOC Analyst / AppSec / Programmer Analyst roles' },
]

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb--one" />
        <span className="orb orb--two" />
        <span className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              {profile.status}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1 className="hero-name">
              Bhavya Sree <span className="text-gradient">Gaddam</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero-roles" aria-live="polite">
              <span className="hero-role-prefix">&gt;_</span>
              <span className="typed-text">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero-summary">
              {profile.tagline} Final-year B.Tech Cyber Security student at MITS — building secure MERN-stack
              products by day, hunting vulnerabilities and CTF flags by night.
            </p>
          </Reveal>

          <Reveal delay={320} className="hero-cta-row">
            <a className="btn btn-primary" href={profile.resumeUrl} download={profile.resumeFileName}>
              <Icon name="download" size={18} />
              Download Resume
            </a>
            <button type="button" className="btn btn-ghost" onClick={() => scrollTo('projects')}>
              View Projects
              <Icon name="arrow-right" size={18} />
            </button>
          </Reveal>

          <Reveal delay={400} className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="social-btn">
              <Icon name="github" size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="social-btn">
              <Icon name="linkedin" size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="social-btn">
              <Icon name="mail" size={20} />
            </a>
            <span className="social-divider" aria-hidden="true" />
            <a className="hero-mail-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={480} className="hero-stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value text-gradient">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal variant="right" delay={200} className="hero-visual">
          <div className="portrait-frame">
            <span className="portrait-ring" aria-hidden="true" />
            <img src={profile.avatar} alt="Portrait of Bhavya Sree Gaddam" className="portrait" width="420" height="420" />
            <span className="float-chip float-chip--one">
              <Icon name="shield" size={15} /> SOC & VAPT
            </span>
            <span className="float-chip float-chip--two">
              <Icon name="radar" size={15} /> Cloud Sec
            </span>
            <span className="float-chip float-chip--three">
              <Icon name="code" size={15} /> MERN
            </span>
            
          </div>

          <div className="terminal-card" role="img" aria-label="Terminal window showing profile summary">
            <div className="terminal-bar">
              <span className="terminal-dot terminal-dot--red" />
              <span className="terminal-dot terminal-dot--yellow" />
              <span className="terminal-dot terminal-dot--green" />
              <span className="terminal-title">bash — bhavya@sec</span>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, i) =>
                line.cmd ? (
                  <p key={i} className="terminal-line">
                    <span className="terminal-prompt">{line.prompt}:~$</span> {line.cmd}
                  </p>
                ) : (
                  <p key={i} className="terminal-line terminal-out">
                    {line.out}
                  </p>
                ),
              )}
              <p className="terminal-line">
                <span className="terminal-prompt">bhavya@sec:~$</span> <span className="caret" aria-hidden="true" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <button
        type="button"
        className="scroll-hint"
        aria-label="Scroll to about section"
        onClick={() => scrollTo('about')}
      >
        <span className="scroll-hint-mouse" aria-hidden="true">
          <span />
        </span>
        scroll
      </button>
    </section>
  )
}
