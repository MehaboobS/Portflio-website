import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            Mehaboob S <span style={{ color: '#6366f1' }}>— Software Engineer</span>
          </div>
          <div className="footer-tagline">
            B.E. Computer Science & Engineering • Jyothy Institute of Technology
          </div>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#education" className="footer-link">Education</a>
          <a href="#achievements" className="footer-link">Achievements</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Crafted with</span>
            <Code2 size={14} color="#818cf8" />
            <span>& React / Vite</span>
          </div>
          <button
            onClick={scrollToTop}
            className="social-icon-btn"
            style={{ width: '38px', height: '38px', borderRadius: '50%' }}
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
