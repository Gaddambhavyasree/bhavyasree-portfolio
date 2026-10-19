import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'
import { navLinks, profile } from '../data/portfolio.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const goTo = (event, id) => {
    event.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#home" className="brand" onClick={(e) => goTo(e, 'home')} aria-label="Go to top">
          <span className="brand-mark" aria-hidden="true">
            <Icon name="shield" size={18} />
          </span>
          <span className="brand-text">
            Bhavya<span className="brand-accent">.Sec</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : undefined}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={(e) => goTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-outline btn-sm nav-resume" href={profile.resumeUrl} download={profile.resumeFileName}>
            <Icon name="download" size={16} />
            Resume
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}
              className={active === link.id ? 'active' : undefined}
              onClick={(e) => goTo(e, link.id)}
            >
              <span className="mobile-index">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary mobile-resume" href={profile.resumeUrl} download={profile.resumeFileName}>
          <Icon name="download" size={18} />
          Download Resume
        </a>
      </div>
    </header>
  )
}
