import { useState } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { contactCard, profile } from '../data/portfolio.js'

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={label} title={label}>
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name || 'your portfolio'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section section--alt" aria-label="Contact">
      <div className="container">
        <SectionHeading
          eyebrow="// contact"
          title="Let's secure something together"
          subtitle={contactCard.headline}
        />

        <div className="contact-grid">
          <Reveal variant="left" className="contact-info">
            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="mail" size={20} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Email</span>
                <a className="contact-card-value" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <CopyButton value={profile.email} label="Copy email address" />
            </div>

            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="phone" size={20} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Phone</span>
                <a className="contact-card-value" href={`tel:${profile.phoneHref}`}>
                  {profile.phone}
                </a>
              </div>
              <CopyButton value={profile.phone} label="Copy phone number" />
            </div>

            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="map-pin" size={20} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">{profile.location}</span>
              </div>
            </div>

            <div className="contact-socials">
              <a className="btn btn-outline" href={profile.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={18} /> GitHub
              </a>
              <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={18} /> LinkedIn
              </a>
            </div>

            <p className="contact-note">
              <Icon name="zap" size={15} /> {contactCard.note}
            </p>
          </Reveal>

          <Reveal variant="right" className="contact-form-card">
            <form onSubmit={onSubmit} aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Project, opportunity, or just a hello"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me what you're building..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <Icon name="mail" size={18} />
                Send Message
              </button>
              <p className="form-hint">This opens your mail app with the message ready to send.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
