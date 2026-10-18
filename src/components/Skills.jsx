import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Sparkles,
  Terminal,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      category: 'Languages',
      icon: <Code2 size={20} color="#38bdf8" />,
      skills: [
        { name: 'C++', level: 'Core / Advanced' },
        { name: 'Python', level: 'Backend & ML' },
        { name: 'JavaScript (ES6+)', level: 'Full-Stack' },
        { name: 'SQL', level: 'Complex Queries & DDL' },
      ],
      description: 'Primary programming languages used across algorithmic engineering and production systems.'
    },
    {
      id: 'backend',
      category: 'Backend & APIs',
      icon: <Server size={20} color="#818cf8" />,
      skills: [
        { name: 'FastAPI', level: 'High-performance Async' },
        { name: 'Django', level: 'Web Applications' },
        { name: 'Node.js', level: 'Runtime' },
        { name: 'Express.js', level: 'REST APIs' },
        { name: 'REST APIs', level: 'API Design & Integration' },
        { name: 'Microservices', level: 'Decoupled Architecture' },
        { name: 'JWT', level: 'Authentication & Tokens' },
        { name: 'Redis', level: 'In-Memory Caching & Queues' },
      ],
      description: 'Robust server-side frameworks, caching layers, and secure microservice endpoints.'
    },
    {
      id: 'frontend',
      category: 'Frontend Development',
      icon: <Layout size={20} className="icon-emerald" />,
      skills: [
        { name: 'React.js', level: 'Component Architecture' },
        { name: 'Next.js', level: 'SSR & B2B Apps' },
        { name: 'HTML5', level: 'Semantic Markup' },
        { name: 'CSS3', level: 'Modern Layouts & Animations' },
        { name: 'JavaScript', level: 'Client Interaction' },
      ],
      description: 'Creating responsive, accessible, and reactive user interfaces.'
    },
    {
      id: 'databases',
      category: 'Databases & Storage',
      icon: <Database size={20} color="#fbbf24" />,
      skills: [
        { name: 'PostgreSQL', level: 'Relational & Models' },
        { name: 'MongoDB', level: 'NoSQL Document Store' },
        { name: 'MySQL', level: 'Relational Database' },
        { name: 'Redis', level: 'Key-Value Cache' },
      ],
      description: 'Data modeling, relational indexing, caching strategies, and NoSQL stores.'
    },
    {
      id: 'devops',
      category: 'Cloud & DevOps',
      icon: <Cloud size={20} color="#f43f5e" />,
      skills: [
        { name: 'Docker', level: 'Containerization & Sandboxes' },
        { name: 'Azure', level: 'Cloud Services' },
        { name: 'Git', level: 'Version Control' },
        { name: 'GitHub', level: 'Collaboration & Repos' },
        { name: 'Linux', level: 'Shell & Environments' },
        { name: 'CI/CD', level: 'Automated Pipelines' },
      ],
      description: 'Container orchestration, cloud deployment environments, and automated workflows.'
    },
    {
      id: 'cs-core',
      category: 'Computer Science Fundamentals',
      icon: <Cpu size={20} color="#a855f7" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Rigor & Optimization' },
        { name: 'OOP', level: 'Object-Oriented Design' },
        { name: 'DBMS', level: 'Database Management Systems' },
        { name: 'Operating Systems', level: 'Concurrency & Memory' },
        { name: 'Computer Networks', level: 'Protocols & Architecture' },
        { name: 'SDLC', level: 'Agile & Lifecycle' },
      ],
      description: 'Deep theoretical foundation powering clean architecture and problem-solving.'
    },
  ];

  const filteredCategories = filter === 'all' 
    ? skillCategories 
    : skillCategories.filter(item => item.id === filter);

  return (
    <section id="skills" className="section-wrapper bg-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools, languages, and frameworks applied in enterprise internships, academic research, and contest platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter-row">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Disciplines
          </button>
          <button
            className={`filter-btn ${filter === 'languages' ? 'active' : ''}`}
            onClick={() => setFilter('languages')}
          >
            Languages
          </button>
          <button
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend & APIs
          </button>
          <button
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === 'databases' ? 'active' : ''}`}
            onClick={() => setFilter('databases')}
          >
            Databases
          </button>
          <button
            className={`filter-btn ${filter === 'devops' ? 'active' : ''}`}
            onClick={() => setFilter('devops')}
          >
            Cloud & DevOps
          </button>
          <button
            className={`filter-btn ${filter === 'cs-core' ? 'active' : ''}`}
            onClick={() => setFilter('cs-core')}
          >
            CS Core
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="glass-card skill-category-card">
              <div className="category-header">
                <div className="category-title">
                  {cat.icon}
                  <span>{cat.category}</span>
                </div>
                <span className="badge-tag">{cat.skills.length} skills</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                {cat.description}
              </p>
              <div className="tags-cluster">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill" title={skill.level}>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
