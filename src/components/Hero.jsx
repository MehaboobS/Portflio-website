import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  FileText, 
  Code2, 
  Award, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const fullName = "Mehaboob S";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Continuous typing animation effect for user's name (deliberate and relaxed)
  useEffect(() => {
    let timeout;
    if (!isDeleting) {
      if (displayText.length < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        }, 180);
      } else {
        // Generous reading pause at full name
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length - 1));
        }, 95);
      } else {
        // Smooth pause before typing cycle restarts
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 750);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullName]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions & CTAs */}
          <div>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="hero-gradient-text typing-text-wrapper">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="role-badge role-badge-blue">Full-Stack Engineer</span>
              <span className="role-badge role-badge-purple">FastAPI & Microservices</span>
              <span className="role-badge role-badge-green">AI/ML Systems</span>
            </div>

            <p className="hero-bio">
              Computer Science Engineering student at <strong>Jyothy Institute of Technology</strong> with software engineering internship experience building full-stack applications, high-performance REST APIs, Dockerized workflows, and AI/ML architectures.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              <button onClick={onOpenResume} className="btn-secondary">
                <FileText size={18} />
                <span>View Resume</span>
              </button>
              <a href="mailto:1jt23cs090@jyothyit.ac.in" className="btn-secondary">
                <Mail size={18} />
                <span>Email Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links-row">
              <a
                href="https://github.com/MehaboobS"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub: MehaboobS"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mehaboob-s-5a7470280"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:1jt23cs090@jyothyit.ac.in"
                className="social-icon-btn"
                title="Email Me: 1jt23cs090@jyothyit.ac.in"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918050425367"
                className="social-icon-btn"
                title="Call: +91-8050425367"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.88rem', marginLeft: '0.5rem' }}>
                <MapPin size={16} />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal Box */}
          <div className="floating-anim">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="dot dot-red"></div>
                  <div className="dot dot-yellow"></div>
                  <div className="dot dot-green"></div>
                </div>
                <div className="terminal-title">mehaboob@dev-env: ~/profile</div>
                <div style={{ width: '40px' }}></div>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="code-keyword">const</span> <span className="code-variable">engineer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">name</span>: <span className="code-string">"Mehaboob S"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">education</span>: <span className="code-string">"B.E. CSE @ Jyothy Institute of Tech"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">academicScore</span>: <span className="code-number">9.00</span>, <span className="code-comment">// CGPA out of 10</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">internship</span>: <span className="code-string">"Ellipsonic Solution"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">languages</span>: [<span className="code-string">"C++"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"JavaScript"</span>, <span className="code-string">"SQL"</span>],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">specialties</span>: [
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="code-string">"FastAPI & Microservices"</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="code-string">"Docker Sandboxed Execution"</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="code-string">"AI/ML Platform Engineering"</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="code-string">"Full-Stack Web (React/Next.js)"</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="code-variable">achievements</span>: <span className="code-string">"1st Prize Coding, 2nd Prize Datathon, CSE Topper"</span>
                </div>
                <div>
                  &#125;;
                </div>
                <div className="terminal-status-comment">
                  <span className="code-comment">// Status: Ready to deploy high-impact software!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="stats-ribbon">
          <div className="stat-item">
            <div className="stat-number">9.00</div>
            <div className="stat-label">B.E. CSE CGPA (Topper)</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">B2B & Microservices</div>
            <div className="stat-label">Ellipsonic Solution Intern</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+ Core</div>
            <div className="stat-label">Complex Full-Stack & AI Systems</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1st & 2nd</div>
            <div className="stat-label">Hackathon & Datathon Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
