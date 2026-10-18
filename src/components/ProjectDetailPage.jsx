import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  Download, 
  BookOpen, 
  Brain, 
  Layers, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  Sliders, 
  BarChart3, 
  AlertTriangle, 
  Maximize2, 
  X, 
  Sun, 
  Moon, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Server
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage({ projectId, onBack, theme, toggleTheme, onOpenResume }) {
  const [activeResearchTab, setActiveResearchTab] = useState('overview');
  const [previewImage, setPreviewImage] = useState(null);

  // Scroll to top when page opens or projectId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const project = projectsData.find((p) => p.id === projectId) || projectsData[0];
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const getProjectIcon = (id) => {
    switch(id) {
      case 'federated-ml': return <Brain size={28} />;
      case 'agri-ai': return <Activity size={28} />;
      case 'eval-platform': return <Terminal size={28} />;
      case 'churn-ml': return <Brain size={28} />;
      default: return <Layers size={28} />;
    }
  };

  const researchTabs = [
    { id: 'overview', label: '1. Overview & ViT Architecture', icon: <Layers size={16} /> },
    { id: 'algorithms', label: '2. FedAvg vs FedProx vs SCAFFOLD', icon: <Brain size={16} /> },
    { id: 'experimental', label: '3. Setup (IID & Non-IID, Batches)', icon: <Sliders size={16} /> },
    { id: 'results', label: '4. Results & Image Plots', icon: <BarChart3 size={16} /> },
    { id: 'limitations', label: '5. Limitations & References', icon: <AlertTriangle size={16} /> },
  ];

  return (
    <div className="project-detail-page-wrapper">
      {/* Top Floating Sticky Header */}
      <header className="project-detail-header">
        <div className="container project-detail-header-inner">
          <button onClick={onBack} className="btn-detail-back" aria-label="Back to Portfolio">
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </button>

          <div className="project-detail-header-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="theme-icon-sun" />
              ) : (
                <Moon size={18} className="theme-icon-moon" />
              )}
            </button>
            <button 
              onClick={onOpenResume} 
              className="btn-primary"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container project-detail-main">
        {/* Breadcrumb row */}
        <div className="detail-breadcrumb">
          <span onClick={onBack} className="breadcrumb-link">Portfolio</span>
          <span className="breadcrumb-sep">/</span>
          <span onClick={onBack} className="breadcrumb-link">Featured Projects</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{project.title.slice(0, 36)}...</span>
        </div>

        {/* Project Hero Banner */}
        <section className={`glass-card project-detail-hero theme-${project.theme}`}>
          <div className={`project-top-bar bar-${project.theme}`}></div>
          
          <div className="detail-hero-meta-row">
            <div className="detail-hero-left-tags">
              <span className={`project-category-chip chip-${project.theme}`}>
                {project.category}
              </span>
              <span className="project-number-badge">
                PROJECT {project.number}
              </span>
            </div>
            <div className="project-date-pill">
              <Calendar size={14} />
              <span>{project.period}</span>
            </div>
          </div>

          <div className="detail-hero-title-box">
            <div className={`project-avatar-box avatar-${project.theme}`} style={{ width: 56, height: 56 }}>
              {getProjectIcon(project.id)}
            </div>
            <h1 className="project-detail-title">
              {project.title}
            </h1>
          </div>

          {/* Enlarged Lead Project Explanation */}
          <div className="project-detail-lead-card">
            <div className="lead-tag">
              <Sparkles size={16} />
              <span>Executive Project Overview & Architecture Scope</span>
            </div>
            <p className="project-detail-lead-desc">
              {project.fullDesc}
            </p>
          </div>

          {/* Action Row */}
          <div className="detail-hero-actions-row">
            {project.hasResearchInterface ? (
              <>
                <a 
                  href={project.pdfLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.94rem' }}
                >
                  <FileText size={18} />
                  <span>Read Book Chapter (PDF)</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href={project.pdfLink} 
                  download={project.downloadName} 
                  className="btn-secondary"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.94rem' }}
                >
                  <Download size={18} />
                  <span>Download Publication PDF</span>
                </a>
              </>
            ) : null}

            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-project-code"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.94rem' }}
            >
              <GithubIcon size={18} />
              <span>Explore Source Code on GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* ========================================================
            IF FEDERATED LEARNING RESEARCH PROJECT:
            Render Interactive Web-Based Research Interface (Enlarged)
            ======================================================== */}
        {project.id === 'federated-ml' ? (
          <section className="glass-card research-detail-fullpage-card">
            <div className="research-fullpage-tabs-header">
              <div className="research-tabs-scroll-bar">
                {researchTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`research-page-tab-btn ${activeResearchTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveResearchTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="research-fullpage-tab-body">
              {/* TAB 1: OVERVIEW & ARCHITECTURE */}
              {activeResearchTab === 'overview' && (
                <div className="research-page-pane">
                  <div className="research-enlarged-intro">
                    <h2 className="pane-section-title">Decentralized Healthcare AI & Privacy Preservation</h2>
                    <p className="pane-enlarged-text">
                      Centralized medical imaging repositories pose severe legal and ethical hurdles under strict privacy mandates including <strong>HIPAA</strong> and <strong>GDPR</strong>. In this research, we formulated and evaluated a decentralized federated deep learning framework where <strong>2 independent hospital clients</strong> train collaboratively with <strong>1 central aggregation server</strong>. The hospital nodes never transmit raw radiographs across the network; only locally computed parameter updates and weight gradients are shared.
                    </p>
                  </div>

                  {/* Figure 1: ViT Topology */}
                  <div className="research-figure-box figure-box-expanded">
                    <div className="figure-header">
                      <span className="figure-title">Figure 1: Client-Server Federated Vision Transformer (ViT) Topology</span>
                      <button 
                        className="zoom-btn"
                        onClick={() => setPreviewImage('/imagesofBookChapter/ud.png')}
                      >
                        <Maximize2 size={16} /> Click to Enlarge Diagram
                      </button>
                    </div>
                    <div className="figure-img-wrap">
                      <img 
                        src="/imagesofBookChapter/ud.png" 
                        alt="Vision Transformer Pretrained model across clients and server"
                        className="research-img-display"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <p className="figure-caption">
                      Decentralized ViT-Small/16 backbone architecture operating on 224×224 chest radiographs. Hospital clients extract patch embeddings and self-attention tokens locally, transmitting weight vectors \(w_k\) to the central server for global model parameter consolidation.
                    </p>
                  </div>

                  <div className="research-highlights-grid">
                    <div className="res-highlight-card">
                      <div className="res-card-icon-tag"><ShieldCheck size={20} color="#10b981" /> Strict Patient Privacy</div>
                      <p className="res-card-body-text">
                        Raw radiographic images remain quarantined within local clinical firewalls. Transmission is restricted purely to numerical weight updates.
                      </p>
                    </div>
                    <div className="res-highlight-card">
                      <div className="res-card-icon-tag"><Cpu size={20} color="#38bdf8" /> Vision Transformer Backbone</div>
                      <p className="res-card-body-text">
                        Leverages ViT-Small Patch16-224 self-attention mechanisms to capture subtle bilateral opacities and pulmonary consolidations.
                      </p>
                    </div>
                    <div className="res-highlight-card">
                      <div className="res-card-icon-tag"><CheckCircle2 size={20} color="#a855f7" /> 4 Clinical Classes</div>
                      <p className="res-card-body-text">
                        Multi-class radiographic identification differentiating <strong>COVID-19</strong>, <strong>Pneumonia</strong>, <strong>Tuberculosis</strong>, and <strong>Normal</strong> lung fields.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ALGORITHMS & APPROACH */}
              {activeResearchTab === 'algorithms' && (
                <div className="research-page-pane">
                  <div className="research-enlarged-intro">
                    <h2 className="pane-section-title">Comparative Aggregation Algorithms Explored</h2>
                    <p className="pane-enlarged-text">
                      Heterogeneous data distributions cause individual hospital models to optimize towards disparate local minima. We benchmarked three foundational federated aggregation algorithms to determine their stability against client drift:
                    </p>
                  </div>

                  <div className="algo-cards-container">
                    {/* FedAvg */}
                    <div className="algo-card">
                      <div className="algo-badge badge-blue">Algorithm 1: Baseline</div>
                      <h3 className="algo-name">Federated Averaging (FedAvg)</h3>
                      <p className="algo-desc">
                        Computes weighted sample averaging of local client parameters:
                      </p>
                      <div className="algo-formula">
                        w^(t+1) = Σ (n_k / N) * w_k^(t+1)
                      </div>
                      <ul className="algo-bullets">
                        <li className="algo-bullet-item">
                          <strong>Execution Mechanism:</strong> Participating clients perform SGD locally for E epochs; the central server averages updates based on dataset size.
                        </li>
                        <li className="algo-bullet-item">
                          <strong>Observed Dynamics:</strong> Converges smoothly on IID data, but experiences significant <em>client drift</em> and validation oscillations when client data diverges.
                        </li>
                      </ul>
                    </div>

                    {/* FedProx */}
                    <div className="algo-card">
                      <div className="algo-badge badge-green">Algorithm 2: Regularized</div>
                      <h3 className="algo-name">FedProx (Proximal Regularization)</h3>
                      <p className="algo-desc">
                        Introduces a proximal penalty to penalize divergent local weights:
                      </p>
                      <div className="algo-formula">
                        min F_k(w) + (μ / 2) * ||w - w^t||^2
                      </div>
                      <ul className="algo-bullets">
                        <li className="algo-bullet-item">
                          <strong>Execution Mechanism:</strong> Constrains local parameters within an explicit Euclidean ball around the global server parameters.
                        </li>
                        <li className="algo-bullet-item">
                          <strong>Observed Dynamics:</strong> Stabilizes gradient trajectories, prevents divergent epochs, and yields reliable accuracy across uneven medical image counts.
                        </li>
                      </ul>
                    </div>

                    {/* SCAFFOLD */}
                    <div className="algo-card">
                      <div className="algo-badge badge-purple">Algorithm 3: Variance Reduced</div>
                      <h3 className="algo-name">SCAFFOLD (Control Variates)</h3>
                      <p className="algo-desc">
                        Maintains global (c) and local (c_i) control variates:
                      </p>
                      <div className="algo-formula">
                        y_i ← y_i - η_l * (g_i(y_i) - c_i + c)
                      </div>
                      <ul className="algo-bullets">
                        <li className="algo-bullet-item">
                          <strong>Execution Mechanism:</strong> Actively computes drift error vectors and corrects client gradient directions during local updates.
                        </li>
                        <li className="algo-bullet-item">
                          <strong>Observed Dynamics:</strong> Delivered the fastest convergence and highest accuracy (94%–97%) under severe Non-IID Dirichlet distributions.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Loss Function Box */}
                  <div className="loss-card">
                    <h3 className="loss-title">Dynamic Adaptive Focal Loss (DAFL)</h3>
                    <p className="pane-enlarged-text">
                      To counter extreme diagnostic class imbalances between frequent Normal scans and scarce Tuberculosis/COVID-19 samples, our training incorporated dual-tier adaptive imbalance weighting:
                    </p>
                    <div className="formula-box">
                      <div className="formula-math">
                        L_DAFL = -(1 + c_(f,t)) * (1 - p_t)^γ * log(p_t)
                      </div>
                      <p className="formula-legend">
                        Where <code>c_(f,t)</code> dynamically amplifies gradients for under-represented disease classes at both local client and federation levels.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: EXPERIMENTAL SETUP */}
              {activeResearchTab === 'experimental' && (
                <div className="research-page-pane">
                  <div className="research-enlarged-intro">
                    <h2 className="pane-section-title">Experimental Setup & Heterogeneity Hyperparameters</h2>
                    <p className="pane-enlarged-text">
                      Simulated across <strong>2 Healthcare Clients</strong> and <strong>1 Central Server</strong> executing <strong>25 Global Communication Rounds</strong> with distinct data distributions and batch sizes.
                    </p>
                  </div>

                  <div className="exp-grid-two">
                    {/* Hyperparameters Table */}
                    <div className="exp-table-card">
                      <h3 className="algo-name" style={{ marginBottom: '1rem' }}>Training & Optimization Parameters</h3>
                      <div className="research-table-wrapper">
                        <table className="research-table">
                          <tbody>
                            <tr><td>Participating Hospital Clients</td><td><strong>2 Node Simulation</strong></td></tr>
                            <tr><td>Central Aggregation Server</td><td><strong>1 Master Node</strong></td></tr>
                            <tr><td>Global Communication Rounds</td><td><strong>25 Communication Rounds</strong></td></tr>
                            <tr><td>Local Epochs per Round</td><td><strong>5 Local Epochs (E = 5)</strong></td></tr>
                            <tr><td>Batch Sizes Evaluated</td><td><strong>32 vs 64</strong> (varied to test gradient variance)</td></tr>
                            <tr><td>Optimizer & Learning Rate</td><td><strong>AdamW (η = 1e-4)</strong></td></tr>
                            <tr><td>Weight Decay & Regularization</td><td><strong>5e-3</strong> with Gradient Clipping (1.0)</td></tr>
                            <tr><td>Image Input Dimensions</td><td><strong>224 × 224 pixels</strong> (RGB 3-channel)</td></tr>
                            <tr><td>Stochastic Depth Rate</td><td><strong>0.1</strong> to mitigate overfitting</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Partitioning Cards */}
                    <div className="exp-partition-card">
                      <h3 className="algo-name" style={{ marginBottom: '1rem' }}>Data Partitioning & Evaluation Modes</h3>
                      
                      <div className="partition-item">
                        <div className="partition-title">1. IID (Independent & Identically Distributed)</div>
                        <p className="partition-desc">
                          Both clients receive uniformly balanced portions of all 4 disease classes, setting the theoretical upper-bound baseline for global aggregation performance.
                        </p>
                      </div>

                      <div className="partition-item" style={{ borderLeftColor: '#f59e0b' }}>
                        <div className="partition-title">2. Dirichlet Non-IID Skew (α = 0.5)</div>
                        <p className="partition-desc">
                          Samples are partitioned via a Dirichlet distribution with parameter α = 0.5 to replicate real-world regional hospital specialization, where one client possesses mostly Tuberculosis while another holds primarily COVID-19/Normal scans.
                        </p>
                      </div>

                      <div className="partition-item" style={{ borderLeftColor: '#38bdf8' }}>
                        <div className="partition-title">3. Batch Size Dynamics (32 vs 64)</div>
                        <p className="partition-desc">
                          Tested the influence of stochastic mini-batch gradient updates on parameter drift before aggregation cycles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: RESULTS & PLOTS */}
              {activeResearchTab === 'results' && (
                <div className="research-page-pane">
                  <div className="research-enlarged-intro">
                    <h2 className="pane-section-title">Empirical Findings & Training Trajectories</h2>
                    <p className="pane-enlarged-text">
                      Visual evidence demonstrating SCAFFOLD's superior robustness against client drift, followed by FedProx's proximal stabilization and FedAvg's baseline behavior. Click any plot to view in high resolution:
                    </p>
                  </div>

                  {/* Gallery of Actual Book Chapter Plots */}
                  <div className="plots-gallery-grid">
                    {/* Plot 1: SCAFFOLD Non-IID */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/scaffold_nonIID.png')}>
                      <div className="plot-card-header">SCAFFOLD under Non-IID Distribution</div>
                      <img src="/imagesofBookChapter/scaffold_nonIID.png" alt="SCAFFOLD Non-IID metrics" className="plot-thumb" />
                      <div className="plot-desc">Demonstrates sharp drop in loss and stabilization above 95% validation accuracy despite severe Non-IID client skew.</div>
                    </div>

                    {/* Plot 2: FedProx Non-IID */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/fedprox_nonIID_DAW_acc.png')}>
                      <div className="plot-card-header">FedProx Non-IID Accuracy</div>
                      <img src="/imagesofBookChapter/fedprox_nonIID_DAW_acc.png" alt="FedProx Non-IID Accuracy" className="plot-thumb" />
                      <div className="plot-desc">Proximal penalty restricts parameter divergence, providing smooth, steady accuracy progression around 91–93%.</div>
                    </div>

                    {/* Plot 3: FedAvg Non-IID */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/fedavg_nonIID_acc.png')}>
                      <div className="plot-card-header">FedAvg under Non-IID (Client Drift)</div>
                      <img src="/imagesofBookChapter/fedavg_nonIID_acc.png" alt="FedAvg Non-IID Acc" className="plot-thumb" />
                      <div className="plot-desc">Exhibits classic validation fluctuations (85%–88%) due to uncorrected client drift across heterogeneous client datasets.</div>
                    </div>

                    {/* Plot 4: FedAvg IID Loss */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/fedavg_IID_DAW_loss.png')}>
                      <div className="plot-card-header">FedAvg Loss (IID Setting)</div>
                      <img src="/imagesofBookChapter/fedavg_IID_DAW_loss.png" alt="FedAvg IID Loss" className="plot-thumb" />
                      <div className="plot-desc">Rapid convergence and smooth loss decay when client datasets share identical distributions.</div>
                    </div>

                    {/* Plot 5: Confusion Matrix */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/fedprox_iid_64_cm.png')}>
                      <div className="plot-card-header">Confusion Matrix (FedProx BS=64)</div>
                      <img src="/imagesofBookChapter/fedprox_iid_64_cm.png" alt="Confusion Matrix" className="plot-thumb" />
                      <div className="plot-desc">High true-positive rates across COVID-19, Normal, Pneumonia, and Tuberculosis disease categories.</div>
                    </div>

                    {/* Plot 6: Batch 32 vs 64 Comparison */}
                    <div className="plot-card" onClick={() => setPreviewImage('/imagesofBookChapter/scaffold_iid_32_acc.png')}>
                      <div className="plot-card-header">SCAFFOLD Batch Size 32 Convergence</div>
                      <img src="/imagesofBookChapter/scaffold_iid_32_acc.png" alt="SCAFFOLD BS 32" className="plot-thumb" />
                      <div className="plot-desc">Smaller batch size (BS=32) introduced beneficial gradient noise accelerating early-stage convergence.</div>
                    </div>
                  </div>

                  {/* Quantitative Table */}
                  <div className="res-summary-table-box" style={{ marginTop: '2.5rem' }}>
                    <h3 className="algo-name" style={{ marginBottom: '1rem' }}>Quantitative Comparison Across Strategies</h3>
                    <div className="research-table-wrapper">
                      <table className="research-table">
                        <thead>
                          <tr>
                            <th>Aggregation Strategy</th>
                            <th>IID Convergence</th>
                            <th>Non-IID Accuracy</th>
                            <th>Drift Control</th>
                            <th>Communication Overhead</th>
                            <th>Clinical Recommendation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>FedAvg</strong></td>
                            <td>Fast (~8 rounds)</td>
                            <td>86% – 89% (Fluctuating)</td>
                            <td>None (High Drift)</td>
                            <td>Lowest per round</td>
                            <td>Best for balanced, homogeneous clinics</td>
                          </tr>
                          <tr>
                            <td><strong>FedProx</strong></td>
                            <td>Stable (~10 rounds)</td>
                            <td>90% – 93%</td>
                            <td>High (Proximal Term μ)</td>
                            <td>Low (Minimal parameter overhead)</td>
                            <td>Reliable, robust for resource-limited hospitals</td>
                          </tr>
                          <tr>
                            <td><strong>SCAFFOLD</strong></td>
                            <td>Rapid (~5 rounds)</td>
                            <td><strong>94% – 97%</strong></td>
                            <td><strong>Superior (Control Variates)</strong></td>
                            <td>Moderate (Transmits control updates)</td>
                            <td><strong>Optimal for heterogeneous medical networks</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: LIMITATIONS & REFERENCES */}
              {activeResearchTab === 'limitations' && (
                <div className="research-page-pane">
                  <div className="research-enlarged-intro">
                    <h2 className="pane-section-title">Deployment Challenges & Academic Citations</h2>
                    <p className="pane-enlarged-text">
                      Translating decentralized federated intelligence into operational clinical environments entails addressing system-level bottlenecks:
                    </p>
                  </div>

                  <div className="limitations-grid">
                    <div className="limit-card">
                      <h4 className="limit-title">1. Control Variate Communication Overhead</h4>
                      <p className="limit-desc">While SCAFFOLD accelerates convergence, transmitting control variates doubles the payload exchanged per communication round, requiring reliable hospital network connections.</p>
                    </div>
                    <div className="limit-card">
                      <h4 className="limit-title">2. Hospital Hardware Heterogeneity</h4>
                      <p className="limit-desc">Client institutions with varied GPU specifications may encounter synchronization barriers during synchronous aggregation rounds.</p>
                    </div>
                    <div className="limit-card">
                      <h4 className="limit-title">3. Intermittent Client Dropouts</h4>
                      <p className="limit-desc">Unstable hospital connections can stall aggregation unless asynchronous or fault-tolerant client selection protocols are deployed.</p>
                    </div>
                  </div>

                  <div className="references-list-box" style={{ marginTop: '2.5rem' }}>
                    <h3 className="algo-name" style={{ marginBottom: '1.25rem' }}>Academic Bibliography from Accepted Book Chapter</h3>
                    <ol className="academic-refs-ol">
                      <li className="ref-item">
                        <strong>McMahan, B., Moore, E., Ramage, D., Hampson, S., & y Arcas, B. A.</strong> (2017). <em>Communication-Efficient Learning of Deep Networks from Decentralized Data.</em> Artificial Intelligence and Statistics (AISTATS).
                      </li>
                      <li className="ref-item">
                        <strong>Li, T., Sahu, A. K., Zaheer, M., Sanjabi, M., Talwalkar, A., & Smith, V.</strong> (2020). <em>Federated Optimization in Heterogeneous Networks (FedProx).</em> Proceedings of Machine Learning and Systems (MLSys).
                      </li>
                      <li className="ref-item">
                        <strong>Karimireddy, S. P., Kale, S., Mohri, M., Reddi, S., Stich, S., & Suresh, A. T.</strong> (2020). <em>SCAFFOLD: Stochastic Controlled Averaging for Federated Learning.</em> International Conference on Machine Learning (ICML).
                      </li>
                      <li className="ref-item">
                        <strong>Dosovitskiy, A., et al.</strong> (2020). <em>An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale (ViT).</em> International Conference on Learning Representations (ICLR).
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          /* ========================================================
             FOR OTHER PROJECTS (Agri-AI, Code Judge, Churn ML):
             Render Full Dedicated Project Architecture & Case Study Page
             ======================================================== */
          <section className="glass-card project-deepdive-fullpage-card">
            <div className="deepdive-section-block">
              <h2 className="deepdive-heading">
                <Layers size={22} color="#38bdf8" />
                <span>System Architecture & Engineering Implementation</span>
              </h2>
              <p className="deepdive-enlarged-paragraph">
                {project.architecture}
              </p>
            </div>

            <div className="deepdive-section-block">
              <h2 className="deepdive-heading">
                <CheckCircle2 size={22} color="#10b981" />
                <span>Key Technical Highlights & Core Innovations</span>
              </h2>
              <div className="deepdive-highlights-list">
                {project.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="deepdive-highlight-row">
                    <CheckCircle2 size={20} className={`feature-icon-check icon-${project.theme}`} />
                    <span className="deepdive-highlight-text">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="deepdive-section-block">
              <h2 className="deepdive-heading">
                <Cpu size={22} color="#818cf8" />
                <span>Technologies & Engineering Tooling</span>
              </h2>
              <div className="project-tags-cloud" style={{ marginTop: '1rem' }}>
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className={`project-tech-badge badge-${project.theme}`} style={{ fontSize: '0.95rem', padding: '0.45rem 1rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Project Stepper & Back Navigation */}
        <div className="detail-bottom-nav-bar">
          <button 
            onClick={() => {
              window.location.hash = `#/project/${prevProject.id}`;
            }} 
            className="bottom-nav-btn"
          >
            <ArrowLeft size={16} />
            <span>Previous: {prevProject.title.slice(0, 24)}...</span>
          </button>

          <button onClick={onBack} className="btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem' }}>
            <span>← Return to Portfolio</span>
          </button>

          <button 
            onClick={() => {
              window.location.hash = `#/project/${nextProject.id}`;
            }} 
            className="bottom-nav-btn"
          >
            <span>Next: {nextProject.title.slice(0, 24)}...</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Image Preview Lightbox */}
      {previewImage && (
        <div className="lightbox-overlay" onClick={() => setPreviewImage(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setPreviewImage(null)} aria-label="Close Preview">
              <X size={22} />
            </button>
            <img src={previewImage} alt="Enlarged Research Plot" className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
}
