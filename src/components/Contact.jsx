import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onShowToast) {
      onShowToast(`Copied ${type} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      if (onShowToast) onShowToast('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Message transmitted successfully! Thank you for reaching out.');
    }
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have an engineering opportunity, a project to collaborate on, or just want to chat tech, my inbox is always open.
          </p>
        </div>

        <div className="contact-container-grid">
          {/* Left Column: Direct Contact Info & Verification */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 className="contact-card-title">
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Feel free to email me directly or copy my details. I typically respond within 24 hours.
              </p>

              <div className="contact-channel-list">
                {/* Email Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <Mail size={20} />
                  </div>
                  <div className="channel-details">
                    <div className="channel-title">Official Email</div>
                    <div className="channel-value">1jt23cs090@jyothyit.ac.in</div>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('1jt23cs090@jyothyit.ac.in', 'Email')}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedType === 'Email' ? <Check size={18} className="check-icon-success" /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <Phone size={20} />
                  </div>
                  <div className="channel-details">
                    <div className="channel-title">Phone Number</div>
                    <div className="channel-value">+91-8050425367</div>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('+918050425367', 'Phone')}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedType === 'Phone' ? <Check size={18} className="check-icon-success" /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-details">
                    <div className="channel-title">Location</div>
                    <div className="channel-value">Bengaluru, Karnataka, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                Social & Code Profiles
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/MehaboobS"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/mehaboob-s-5a7470280"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-card-title">
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Have an opening or proposal? Leave your note below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="form-success-banner">
                <Check size={20} className="check-icon-success" />
                <span>Thank you! Your message has been received. I will reply soon.</span>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="form-input"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  className="form-input"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  className="form-input"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  required
                  placeholder="Write your note, role description, or questions..."
                  className="form-textarea"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
