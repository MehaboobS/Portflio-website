import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Ellipsonic Solution',
      role: 'Software Engineering Intern',
      period: 'May 2026 – July 2026',
      location: 'Bengaluru, India',
      technologies: ['Next.js', 'Redis', 'Microservices', 'REST APIs', 'Docker', 'Authentication', 'Full-Stack'],
      highlights: [
        'Developed a full-stack B2B procurement marketplace connecting buyers and suppliers through requirement posting, supplier catalogs, bidding, and purchasing workflows.',
        'Implemented API-driven services for authentication, requirements, bidding, profiles, and buyer-supplier communication using REST APIs and Redis caching.',
        'Containerized application components with Docker and designed scalable microservice-based application workflows for resilient deployment.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">Industry Experience</h2>
          <p className="section-subtitle">
            Hands-on professional engineering experience shipping production-grade architectures.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={14} />
              </div>

              <div className="glass-card experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                <ul className="exp-bullets">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="exp-bullet-item">
                      <span className="bullet-dot">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 600 }}>
                    Technologies & Architecture:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge-tag" style={{ color: '#818cf8', borderColor: 'rgba(99,102,241,0.2)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
