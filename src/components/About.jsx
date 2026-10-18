import React from 'react';
import { Server, Brain, Container, Cpu, GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Server size={24} />,
      iconClass: 'icon-blue',
      title: 'Scalable Backend & Microservices',
      desc: 'Expertise in FastAPI, Node.js, Express, and REST APIs. Skilled in designing decoupled microservices, JWT security, and Redis high-speed caching.',
    },
    {
      icon: <Brain size={24} />,
      iconClass: 'icon-purple',
      title: 'AI/ML & Data Engineering',
      desc: 'Hands-on experience in machine learning pipelines, PyTorch, predictive intelligence, and synthesizing real-time satellite, crop, and weather APIs.',
    },
    {
      icon: <Container size={24} />,
      iconClass: 'icon-cyan',
      title: 'Docker & Sandboxed Execution',
      desc: 'Containerizing multi-service workflows and engineering secure, isolated execution environments for code evaluation, test runners, and deployments.',
    },
    {
      icon: <Cpu size={24} />,
      iconClass: 'icon-emerald',
      title: 'DSA & Core Computer Science',
      desc: 'Deep theoretical and hands-on rigor in C++, Data Structures & Algorithms, Object-Oriented Programming, DBMS, OS, and Computer Networks.',
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An engineering mindset focused on building resilient backends, reliable data systems, and intuitive user experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Detailed Narrative */}
          <div className="glass-card about-narrative">
            <div>
              <h3 className="about-headline">
                Engineering robust digital solutions from architecture to production.
              </h3>
              <p className="about-text">
                I am a <strong>Computer Science Engineering student</strong> at <strong>Jyothy Institute of Technology, Bengaluru</strong> (CGPA: <strong>9.00 / 10.00</strong>, Academic Topper) with hands-on software engineering internship experience developing production-ready full-stack applications and distributed microservices.
              </p>
              <p className="about-text">
                During my software engineering internship at <strong>Ellipsonic Solution</strong>, I developed core features for a B2B procurement marketplace, architecting REST APIs, Redis-backed workflows, and Dockerized microservices. My academic projects include an <strong>AI-Powered Digital Agriculture Network</strong> synthesizing satellite and weather telemetry, and an <strong>Automated Coding Evaluation Platform</strong> featuring isolated Docker sandbox execution.
              </p>
            </div>

            <div className="quick-meta-list">
              <div className="meta-item">
                <div className="meta-icon">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="meta-label">Education</div>
                  <div className="meta-val">B.E. CSE (CGPA 9.00)</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <Award size={18} />
                </div>
                <div>
                  <div className="meta-label">Recognition</div>
                  <div className="meta-val">Academic Topper & 1st Prize</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="meta-label">Location</div>
                  <div className="meta-val">Bengaluru, Karnataka</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <div className="meta-label">Focus</div>
                  <div className="meta-val">Full-Stack & Backend / AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Pillar Cards */}
          <div className="pillars-grid">
            {pillars.map((item, index) => (
              <div key={index} className="glass-card pillar-card">
                <div className={`pillar-icon-box ${item.iconClass}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
