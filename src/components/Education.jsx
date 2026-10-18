import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Jyothy Institute of Technology, Bengaluru',
      score: 'CGPA: 9.00 / 10.00',
      tag: 'Academic Topper',
      highlight: 'Specialized in Algorithms, Distributed Systems, Database Management, and Artificial Intelligence.',
    },
    {
      degree: 'Class XII (Pre-University Course - PUC)',
      institution: 'JKV PU College, Bengaluru',
      score: '94.40%',
      tag: 'Distinction',
      highlight: 'Core focus in Physics, Chemistry, Mathematics, and Computer Science.',
    },
    {
      degree: 'Class X (SSLC)',
      institution: 'Sri Public School, Bengaluru',
      score: '94.56%',
      tag: 'Top Tier Distinction',
      highlight: 'Excellence in Mathematics, Science, and Analytical Foundations.',
    },
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong analytical foundations and sustained academic excellence throughout engineering and foundational studies.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {educationList.map((item, index) => (
            <div key={index} className="glass-card edu-card">
              <div className="edu-top">
                <div>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <div className="edu-inst">{item.institution}</div>
                </div>
                <div className="edu-score-badge">{item.score}</div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '0.75rem', lineHeight: '1.6' }}>
                {item.highlight}
              </p>

              <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-tag badge-green">
                  ★ {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
