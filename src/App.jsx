import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ProjectBlogPage from './components/ProjectBlogPage';
import Footer from './components/Footer';
import { CheckCircle2, Sparkles, FileText, Download, X, Printer } from 'lucide-react';
import './App.css';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const getProjectIdFromHash = (hash) => {
    if (hash.startsWith('#/blog/')) {
      return hash.replace('#/blog/', '').trim();
    }
    if (hash.startsWith('#/project/')) {
      return hash.replace('#/project/', '').trim();
    }
    return null;
  };

  const [currentProjectId, setCurrentProjectId] = useState(() => {
    return getProjectIdFromHash(window.location.hash);
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Synchronize with URL hash changes for browser forward/back navigation
  useEffect(() => {
    const handleHashChange = () => {
      const id = getProjectIdFromHash(window.location.hash);
      setCurrentProjectId(id);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProject = (projectId) => {
    window.location.hash = `#/blog/${projectId}`;
    setCurrentProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '#projects';
    setCurrentProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    triggerToast(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="portfolio-app">
      {/* If redirected to dedicated project blog page */}
      {currentProjectId ? (
        <ProjectBlogPage 
          projectId={currentProjectId}
          onBack={handleBackToHome}
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenResume={() => setShowResumeModal(true)}
        />
      ) : (
        <>
          {/* Main Portfolio Layout */}
          <Navbar 
            theme={theme} 
            toggleTheme={toggleTheme} 
            onOpenResume={() => setShowResumeModal(true)} 
          />

          <main>
            <Hero onOpenResume={() => setShowResumeModal(true)} />
            <About />
            <Skills />
            <Experience />
            <Projects onOpenProject={handleOpenProject} />
            <div className="section-wrapper" style={{ paddingBottom: '3.5rem' }}>
              <div className="container dual-section-grid">
                <Education />
                <Achievements onOpenProject={handleOpenProject} />
              </div>
            </div>
          </main>

          <Footer />
        </>
      )}

      {/* Floating Action Button for Quick Resume View */}
      <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 90 }}>
        <button
          onClick={() => setShowResumeModal(true)}
          className="btn-primary"
          style={{
            padding: '0.75rem 1.4rem',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.5)',
            fontSize: '0.88rem'
          }}
        >
          <FileText size={18} />
          <span>View Full Resume</span>
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={18} className="toast-icon-check" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Complete Resume Modal */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div
            className="modal-content resume-modal-box"
            style={{ maxWidth: '800px', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setShowResumeModal(false)}
              aria-label="Close resume viewer"
            >
              <X size={20} />
            </button>

            {/* Resume Document View */}
            <div className="resume-modal-header">
              <div>
                <h2 className="resume-doc-name">Mehaboob S</h2>
                <div className="resume-doc-contact">
                  Bengaluru, Karnataka, India • +91-8050425367 • 1jt23cs090@jyothyit.ac.in
                </div>
                <div className="resume-doc-links">
                  linkedin.com/in/mehaboob-s-5a7470280 • github.com/MehaboobS
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handlePrint}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <Printer size={16} />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="resume-section-block">
              <h4 className="resume-section-heading">
                SUMMARY
              </h4>
              <p className="resume-body-text">
                Computer Science Engineering student with software engineering internship experience building full-stack applications, REST APIs, and AI/ML systems. Strong foundation in C++, Python, Data Structures and Algorithms, OOP, DBMS, SQL, and Software Engineering. Experienced with FastAPI, React.js, Node.js, PostgreSQL, MongoDB, Redis, Docker, Git, PyTorch, and Azure. Strong problem-solving skills with experience developing scalable backend services and API-driven applications.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="resume-section-block">
              <h4 className="resume-section-heading">
                TECHNICAL SKILLS
              </h4>
              <div className="resume-skills-list">
                <div><strong className="resume-strong-label">Languages:</strong> C++, Python, JavaScript, SQL</div>
                <div><strong className="resume-strong-label">CS:</strong> DSA, OOP, DBMS, OS, Computer Networks, SDLC</div>
                <div><strong className="resume-strong-label">Backend:</strong> FastAPI, Django, Node.js, Express.js, REST APIs, Microservices, JWT</div>
                <div><strong className="resume-strong-label">Frontend:</strong> React.js, Next.js, HTML5, CSS3, JavaScript</div>
                <div><strong className="resume-strong-label">Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis</div>
                <div><strong className="resume-strong-label">Cloud/DevOps:</strong> Azure, Docker, Git, GitHub, Linux, CI/CD</div>
              </div>
            </div>

            {/* Experience */}
            <div className="resume-section-block">
              <h4 className="resume-section-heading">
                EXPERIENCE
              </h4>
              <div>
                <div className="resume-item-top">
                  <span>Ellipsonic Solution — Software Engineering Intern</span>
                  <span className="resume-item-date">May 2026 – July 2026</span>
                </div>
                <div className="resume-item-tech">
                  Next.js, Redis, Microservices, REST APIs, Docker
                </div>
                <ul className="resume-bullet-list">
                  <li>Developed a full-stack B2B procurement marketplace connecting buyers and suppliers through requirement posting, supplier catalogs, bidding, and purchasing workflows.</li>
                  <li>Implemented API-driven services for authentication, requirements, bidding, profiles, and buyer-supplier communication using REST APIs and Redis.</li>
                  <li>Containerized application components with Docker and designed scalable microservice-based application workflows.</li>
                </ul>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="resume-section-block">
              <h4 className="resume-section-heading">
                ACADEMIC PROJECTS
              </h4>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <div className="resume-item-top">
                  <span>AI-Powered Digital Agriculture Network</span>
                  <span className="resume-item-date">2026 – Present</span>
                </div>
                <div className="resume-item-tech">
                  Python, FastAPI, React.js, PostgreSQL, Machine Learning, REST APIs
                </div>
                <ul className="resume-bullet-list">
                  <li>Building an AI-powered agriculture platform combining crop, soil, satellite, and weather data to generate localized agricultural recommendations.</li>
                  <li>Developed FastAPI REST services and a React.js frontend with PostgreSQL-backed workflows for farm, crop, environmental, and recommendation data.</li>
                  <li>Integrated satellite and weather APIs to combine real-time environmental information with machine learning-based decision support.</li>
                </ul>
              </div>

              <div>
                <div className="resume-item-top">
                  <span>Online Coding Assessment & Automated Evaluation Platform</span>
                  <span className="resume-item-date">2026</span>
                </div>
                <div className="resume-item-tech">
                  C++, Python, FastAPI, React.js, PostgreSQL, Docker, REST APIs, DSA
                </div>
                <ul className="resume-bullet-list">
                  <li>Developed a coding assessment platform for programming problems, source-code submissions, automated test-case evaluation, and assessment management.</li>
                  <li>Built REST APIs with FastAPI and isolated Docker execution workflows supporting compilation, correctness, runtime, memory, and submission-status evaluation.</li>
                  <li>Developed React.js interfaces and PostgreSQL data models for users, problems, test cases, submissions, and evaluation results.</li>
                </ul>
              </div>
            </div>

            {/* Education & Achievements */}
            <div>
              <h4 className="resume-section-heading">
                EDUCATION & ACHIEVEMENTS
              </h4>
              <div className="resume-skills-list">
                <div><strong className="resume-strong-label">B.E. CSE</strong> — Jyothy Institute of Technology, Bengaluru (CGPA: <strong>9.00/10.00</strong>, Academic Topper)</div>
                <div><strong className="resume-strong-label">Class XII (PUC)</strong> — JKV PU College, Bengaluru (<strong>94.40%</strong>)</div>
                <div><strong className="resume-strong-label">Class X (SSLC)</strong> — Sri Public School, Bengaluru (<strong>94.56%</strong>)</div>
                <div style={{ marginTop: '0.35rem' }}><strong className="resume-strong-label">Honors:</strong> 1st Prize – Coding Challenge (Jyothy IT) | 2nd Prize – Datathon Challenge (DSATM)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
