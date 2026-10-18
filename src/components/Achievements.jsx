import React from 'react';
import { Award, Trophy, Star, Sparkles, Medal, BookOpen, ExternalLink, FileText, ArrowRight } from 'lucide-react';

export default function Achievements({ onOpenProject, onOpenResearch }) {
  const handleOpenResearch = () => {
    if (onOpenProject) {
      onOpenProject('federated-ml');
    } else if (onOpenResearch) {
      onOpenResearch();
    }
  };

  const awards = [
    {
      title: 'Selected in ICCMN Conference, 2026 – Distributed Federated Learning',
      subheading: 'Comparative Evaluation of Federated Aggregation Strategies for Classification of Chest X-Ray Images',
      organization: 'ICCMN Conf, 2026 (Book Chapter Publication in Distributed Medical AI)',
      type: 'cyan',
      icon: <BookOpen size={24} />,
      badge: 'Accepted Book Chapter',
      desc: 'Investigated privacy-preserving distributed machine learning across 2 decentralized hospital clients and 1 aggregation server. Explored FedProx, FedAvg, and SCAFFOLD aggregation strategies on both IID and Dirichlet Non-IID medical data with varied batch sizes (32 and 64) for Vision Transformer (ViT) classification.',
      hasResearchLink: true,
    },
    {
      title: '1st Prize – Coding Challenge',
      organization: 'Jyothy Institute of Technology, Bengaluru',
      type: 'gold',
      icon: <Trophy size={24} />,
      badge: 'First Place Winner',
      desc: 'Competed in algorithmic problem solving and rapid competitive coding against top departmental programmers, solving complex data structure challenges with optimal time and space complexity.',
    },
    {
      title: '2nd Prize – Datathon Challenge',
      organization: 'DSATM (Dayananda Sagar Academy of Technology & Management)',
      type: 'silver',
      icon: <Medal size={24} />,
      badge: 'Runners-Up Award',
      desc: 'Developed an end-to-end customer churn prediction system, architecting exploratory data analysis, predictive machine learning classification pipelines, and feature importance interpretations under strict hackathon deadlines.',
    },
    {
      title: 'Academic Topper – B.E. Computer Science & Engineering',
      organization: 'Jyothy Institute of Technology',
      type: 'purple',
      icon: <Star size={24} />,
      badge: 'Rank 1 Academic Excellence',
      desc: 'Recognized as the top-ranking academic performer in the Computer Science and Engineering department with a cumulative GPA of 9.00 / 10.00 across challenging engineering curricula.',
    },
  ];

  return (
    <section id="achievements" className="section-wrapper bg-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Honors & Publications</span>
          </div>
          <h2 className="section-title">Achievements & Accolades</h2>
          <p className="section-subtitle">
            Demonstrated competitive problem-solving skills, published distributed machine learning research, and sustained academic distinction.
          </p>
        </div>

        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {awards.map((award, index) => (
            <div key={index} className="glass-card achievement-card">
              <div className={`trophy-box ${award.type}`}>
                {award.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3 className="achieve-title">{award.title}</h3>
                    {award.subheading && (
                      <div style={{ color: '#38bdf8', fontSize: '0.92rem', fontWeight: 600, marginTop: '0.2rem' }}>
                        "{award.subheading}"
                      </div>
                    )}
                  </div>
                  <span className="badge-tag" style={{ 
                    color: award.type === 'cyan' ? '#38bdf8' : award.type === 'gold' ? '#fbbf24' : award.type === 'silver' ? '#cbd5e1' : '#c084fc',
                    borderColor: award.type === 'cyan' ? 'rgba(56, 189, 248, 0.3)' : undefined
                  }}>
                    {award.badge}
                  </span>
                </div>
                <div className="achieve-org">{award.organization}</div>
                <p className="achieve-desc">{award.desc}</p>

                {award.hasResearchLink && (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.1rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={handleOpenResearch}
                      className="btn-primary"
                      style={{ padding: '0.55rem 1.15rem', fontSize: '0.84rem' }}
                    >
                      <BookOpen size={15} />
                      <span>Explore Interactive Research Web Interface</span>
                      <ArrowRight size={14} />
                    </button>
                    <a
                      href="/bookChapter.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.55rem 1.15rem', fontSize: '0.84rem' }}
                    >
                      <FileText size={15} />
                      <span>View Book Chapter (PDF)</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
