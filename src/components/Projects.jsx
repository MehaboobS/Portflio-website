import React, { useState, useEffect, useRef } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Server, 
  Calendar, 
  Brain, 
  ChevronUp, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft,
  BookOpen,
  FileText
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollTime = useRef(0);

  const projects = projectsData;

  const goToProject = (index) => {
    if (index === currentIndex || animating) return;
    setAnimating(true);
    setCurrentIndex(index);
    // Smooth, slow animation transition
    setTimeout(() => {
      setAnimating(false);
    }, 700);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    goToProject(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    goToProject(prevIdx);
  };

  // Smooth scroll event inside projects section to step through projects
  const handleWheel = (e) => {
    const now = Date.now();
    // Smooth gentle throttle
    if (now - lastScrollTime.current < 850) return;

    if (e.deltaY > 35) {
      if (currentIndex < projects.length - 1) {
        lastScrollTime.current = now;
        goToProject(currentIndex + 1);
      }
    } else if (e.deltaY < -35) {
      if (currentIndex > 0) {
        lastScrollTime.current = now;
        goToProject(currentIndex - 1);
      }
    }
  };

  const activeProject = projects[currentIndex];

  const getProjectIcon = (id) => {
    switch(id) {
      case 'federated-ml': return <Brain size={24} />;
      case 'agri-ai': return <Activity size={24} />;
      case 'eval-platform': return <Terminal size={24} />;
      case 'churn-ml': return <Brain size={24} />;
      default: return <Layers size={24} />;
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      onWheel={handleWheel}
      className="section-wrapper projects-spotlight-wrapper"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Academic & Research Spotlight</span>
          </div>
          <h2 className="section-title">Featured Project Spotlight</h2>
          <p className="section-subtitle">
            Displaying 1 project at a time. Click the numbered vertical timeline on the right or scroll gently to navigate.
          </p>
        </div>

        {/* Compound Unit: Perfectly Centered in the middle */}
        <div className="spotlight-showcase-container">
          {/* Spotlight Card */}
          <div className="spotlight-card-area">
            <div 
              key={activeProject.id}
              className={`glass-card spotlight-project-card theme-${activeProject.theme} ${animating ? 'project-animating' : ''}`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`project-top-bar bar-${activeProject.theme}`}></div>

              <div className="spotlight-card-content">
                {/* Header: Icon, Category Chip, and Date Pill */}
                <div className="project-card-header">
                  <div className="project-header-left">
                    <div className={`project-avatar-box avatar-${activeProject.theme}`}>
                      {getProjectIcon(activeProject.id)}
                    </div>
                    <div>
                      <span className={`project-category-chip chip-${activeProject.theme}`}>
                        {activeProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="project-date-pill">
                    <Calendar size={13} />
                    <span>{activeProject.period}</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="spotlight-project-title">
                  {activeProject.title}
                </h3>

                {/* Increased Font Size Description with clear, punchy explanation */}
                <p className="spotlight-project-desc">
                  {activeProject.shortDesc}
                </p>

                {/* Concise Highlights List with enlarged text */}
                <div className="project-features-list">
                  {activeProject.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="project-feature-row">
                      <CheckCircle2 size={18} className={`feature-icon-check icon-${activeProject.theme}`} />
                      <span className="feature-text">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    Engineered With:
                  </div>
                  <div className="project-tags-cloud">
                    {activeProject.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className={`project-tech-badge badge-${activeProject.theme}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons & Stepper (Redirects to Dedicated Project Page) */}
                <div className="spotlight-actions-bar">
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: 1 }}>
                    <button
                      className={`btn-project-primary btn-${activeProject.theme}`}
                      onClick={() => onOpenProject(activeProject.id)}
                      title="Open full project description and technical blog on a dedicated page"
                    >
                      {activeProject.hasResearchInterface ? (
                        <>
                          <BookOpen size={17} />
                          <span>Project Description & Research Blog</span>
                          <ArrowRight size={14} />
                        </>
                      ) : (
                        <>
                          <Layers size={17} />
                          <span>Project Description & Technical Blog</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    {activeProject.pdfLink && (
                      <a
                        href={activeProject.pdfLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                        style={{ padding: '0.75rem 1.25rem', fontSize: '0.92rem' }}
                      >
                        <FileText size={16} />
                        <span>Book Chapter PDF</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-code"
                    >
                      <GithubIcon size={16} />
                      <span>Code</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Left / Right Quick Stepper Controls */}
                  <div className="spotlight-stepper-controls">
                    <button 
                      onClick={handlePrev} 
                      className="stepper-arrow-btn" 
                      title="Previous Project"
                      aria-label="Previous Project"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="stepper-counter-label">
                      {activeProject.number} / {projects.length < 10 ? `0${projects.length}` : projects.length}
                    </span>
                    <button 
                      onClick={handleNext} 
                      className="stepper-arrow-btn" 
                      title="Next Project"
                      aria-label="Next Project"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exactly Aligned Vertical Timeline with Clickable Numbers */}
          <div className="vertical-timeline-sidebar">
            <div className="vertical-scroll-track-container">
              {/* Vertical Glowing Connector Line */}
              <div className="vertical-scroll-track-line">
                <div 
                  className="vertical-scroll-progress-fill"
                  style={{
                    height: `${((currentIndex) / (projects.length - 1)) * 100}%`
                  }}
                ></div>
              </div>

              {/* Numbered Node Buttons */}
              <div className="vertical-nodes-list">
                {projects.map((proj, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div 
                      key={proj.id} 
                      className={`vertical-node-wrapper ${isActive ? 'is-active' : ''}`}
                      onClick={() => goToProject(idx)}
                    >
                      <button
                        className={`vertical-node-circle theme-node-${proj.theme} ${isActive ? 'active-circle' : ''}`}
                        aria-label={`Jump to project ${proj.number}: ${proj.title}`}
                        title={proj.title}
                      >
                        <span className="node-number-text">{proj.number}</span>
                      </button>

                      {/* Side Tooltip / Label */}
                      <div className="vertical-node-label">
                        <span className="node-category-tag">{proj.category.split('•')[0].split('&')[0]}</span>
                        <span className="node-project-name">{proj.title.slice(0, 22)}...</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Up & Down Scroll Hints */}
              <div className="vertical-scroll-hints">
                <button 
                  onClick={handlePrev} 
                  className="scroll-hint-btn" 
                  disabled={currentIndex === 0}
                  aria-label="Scroll Up"
                >
                  <ChevronUp size={16} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="scroll-hint-btn" 
                  disabled={currentIndex === projects.length - 1}
                  aria-label="Scroll Down"
                >
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
