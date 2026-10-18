import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Activity, 
  Brain, 
  Layers, 
  Server, 
  Sliders, 
  BarChart3, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export default function ResearchModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [previewImage, setPreviewImage] = useState(null);

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: '1. Overview & ViT Architecture', icon: <Layers size={16} /> },
    { id: 'algorithms', label: '2. FedAvg vs FedProx vs SCAFFOLD', icon: <Brain size={16} /> },
    { id: 'experimental', label: '3. Setup (IID & Non-IID, Batches)', icon: <Sliders size={16} /> },
    { id: 'results', label: '4. Results & Image Plots', icon: <BarChart3 size={16} /> },
    { id: 'limitations', label: '5. Limitations & References', icon: <AlertTriangle size={16} /> },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content modal-research-wide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="research-modal-header">
          <div className="research-badge-container">
            <span className="research-pill-conf">ICCMN Conference, 2026 Accepted</span>
            <span className="research-pill-domain">Distributed Machine Learning / Federated AI</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close research modal">
            <X size={20} />
          </button>
        </div>

        {/* Paper Title Banner */}
        <div className="research-hero-banner">
          <h2 className="research-paper-title">
            Comparative Evaluation of Federated Aggregation Strategies for Classification of Chest X-Ray Images
          </h2>
          <p className="research-paper-subtitle">
            A comprehensive investigation of <strong>FedAvg</strong>, <strong>FedProx</strong>, and <strong>SCAFFOLD</strong> under heterogeneous (IID & Dirichlet Non-IID) data distributions using a decentralized Vision Transformer (ViT) architecture with 2 clients and 1 central aggregation server.
          </p>
          <div className="research-cta-row">
            <a 
              href="/bookChapter.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
            >
              <FileText size={16} />
              <span>Read Full Book Chapter (PDF)</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="/bookChapter.pdf" 
              download="Comparative_Evaluation_Federated_Learning_ICCMN2026.pdf" 
              className="btn-secondary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
            >
              <Download size={16} />
              <span>Download Publication</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="research-nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`research-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="research-tab-body">
          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === 'overview' && (
            <div className="research-tab-pane">
              <div className="research-section-intro">
                <h3>Decentralized Healthcare AI & Privacy Preservation</h3>
                <p>
                  Centralized aggregation of chest radiographs violates strict medical privacy mandates including <strong>HIPAA</strong> and <strong>GDPR</strong>. Our work simulates a privacy-preserving distributed network consisting of <strong>2 independent hospital clients</strong> and <strong>1 central aggregation server</strong>. Clients never transmit raw patient data; only locally trained model parameter updates are communicated.
                </p>
              </div>

              {/* ViT Architecture Figure */}
              <div className="research-figure-box">
                <div className="figure-header">
                  <span>Figure 1: Client-Server Federated Vision Transformer (ViT) Topology</span>
                  <button 
                    className="zoom-btn"
                    onClick={() => setPreviewImage('/imagesofBookChapter/ud.png')}
                  >
                    <Maximize2 size={14} /> Zoom
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
                  Pretrained ViT-Small/16 backbone operating on 224×224 chest radiographs. Clients extract patch embeddings and self-attention tokens, transmitting local weight vectors \(w_k\) to the server for global aggregation.
                </p>
              </div>

              <div className="research-highlights-grid">
                <div className="res-highlight-card">
                  <h4>🔒 Privacy Guarantee</h4>
                  <p>Raw radiographic images remain strictly on client premises. Communication is limited to model weight updates.</p>
                </div>
                <div className="res-highlight-card">
                  <h4>🧠 Vision Transformer Backbone</h4>
                  <p>Adopts ViT-Small Patch16-224 leveraging global self-attention to identify subtle respiratory abnormalities.</p>
                </div>
                <div className="res-highlight-card">
                  <h4>🎯 4 Diagnostic Classes</h4>
                  <p>Multi-class radiographic identification across <strong>COVID-19</strong>, <strong>Pneumonia</strong>, <strong>Tuberculosis</strong>, and <strong>Normal</strong>.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ALGORITHMS & APPROACH */}
          {activeTab === 'algorithms' && (
            <div className="research-tab-pane">
              <div className="research-section-intro">
                <h3>Comparative Aggregation Algorithms Explored</h3>
                <p>
                  We rigorously evaluate three major federated aggregation strategies to determine their robustness against statistical data heterogeneity and client drift.
                </p>
              </div>

              <div className="algo-cards-container">
                {/* FedAvg */}
                <div className="algo-card">
                  <div className="algo-badge badge-blue">Algorithm 1: Baseline</div>
                  <h4>Federated Averaging (FedAvg)</h4>
                  <p className="algo-desc">
                    Computes weighted sample averaging of client parameters:
                  </p>
                  <div className="algo-formula">
                    w^(t+1) = Σ (n_k / N) * w_k^(t+1)
                  </div>
                  <ul className="algo-bullets">
                    <li><strong>Mechanism:</strong> Clients run SGD locally for E epochs; server averages updates.</li>
                    <li><strong>Behavior:</strong> Performs efficiently on IID data, but suffers severe <em>client drift</em> on heterogeneous distributions.</li>
                  </ul>
                </div>

                {/* FedProx */}
                <div className="algo-card">
                  <div className="algo-badge badge-green">Algorithm 2: Regularized</div>
                  <h4>FedProx (Proximal Regularization)</h4>
                  <p className="algo-desc">
                    Adds a proximal penalty to prevent local divergence:
                  </p>
                  <div className="algo-formula">
                    min F_k(w) + (μ / 2) * ||w - w^t||^2
                  </div>
                  <ul className="algo-bullets">
                    <li><strong>Mechanism:</strong> Constrains local parameters within a distance radius of global parameters.</li>
                    <li><strong>Behavior:</strong> Significantly stabilizes convergence and mitigates statistical divergence when data sizes vary.</li>
                  </ul>
                </div>

                {/* SCAFFOLD */}
                <div className="algo-card">
                  <div className="algo-badge badge-purple">Algorithm 3: Control Variates</div>
                  <h4>SCAFFOLD (Variance Reduced)</h4>
                  <p className="algo-desc">
                    Maintains global (c) and local (c_i) control variates:
                  </p>
                  <div className="algo-formula">
                    y_i ← y_i - η_l * (g_i(y_i) - c_i + c)
                  </div>
                  <ul className="algo-bullets">
                    <li><strong>Mechanism:</strong> Actively computes drift vectors and corrects client gradient directions during local updates.</li>
                    <li><strong>Behavior:</strong> Achieved the fastest convergence, highest stability, and lowest loss under severe Non-IID conditions.</li>
                  </ul>
                </div>
              </div>

              <div className="dafl-box">
                <h4>Dynamic Adaptive Focal Loss (DAFL)</h4>
                <p>
                  To combat extreme class imbalances between COVID-19, Tuberculosis, and Normal scans, we incorporated a dual-level imbalance weighting coefficient at client and federation level:
                  <code> L_DAFL = -(1 + c_(f,t)) * (1 - p_t)^γ * log(p_t)</code>
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: EXPERIMENTAL SETUP */}
          {activeTab === 'experimental' && (
            <div className="research-tab-pane">
              <div className="research-section-intro">
                <h3>Experimental Architecture & Hyperparameters</h3>
                <p>
                  Experiments evaluated <strong>2 Clients</strong> with <strong>1 Server</strong> over <strong>25 Global Communication Rounds</strong> with different partitioning modes and batch sizes.
                </p>
              </div>

              <div className="exp-grid-two">
                {/* Hyperparameters Table */}
                <div className="exp-table-card">
                  <h4>Training Hyperparameters</h4>
                  <table className="research-table">
                    <tbody>
                      <tr><td>Participating Clients</td><td><strong>2 Healthcare Nodes</strong></td></tr>
                      <tr><td>Global Communication Rounds</td><td><strong>25 Rounds</strong></td></tr>
                      <tr><td>Local Epochs per Round</td><td><strong>5 Epochs (E = 5)</strong></td></tr>
                      <tr><td>Batch Sizes Tested</td><td><strong>32 and 64</strong> (varied to observe aggregation dynamics)</td></tr>
                      <tr><td>Learning Rate</td><td><strong>1e-4</strong> (AdamW Optimizer)</td></tr>
                      <tr><td>Weight Decay</td><td><strong>5e-3</strong> with Gradient Clipping (1.0)</td></tr>
                      <tr><td>Input Resolution</td><td><strong>224 × 224 pixels</strong> (Normalized to ImageNet μ, σ)</td></tr>
                      <tr><td>Regularization</td><td>Dropout (0.1) & Stochastic Depth (0.1)</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Data Distribution Card */}
                <div className="exp-partition-card">
                  <h4>Data Partitioning Strategies</h4>
                  
                  <div className="partition-item">
                    <div className="partition-title">1. IID (Independent & Identically Distributed)</div>
                    <p>Both clients receive identical proportional distributions of all 4 disease classes, establishing the theoretical performance baseline.</p>
                  </div>

                  <div className="partition-item" style={{ borderLeftColor: '#f59e0b' }}>
                    <div className="partition-title">2. Dirichlet Non-IID (α = 0.5)</div>
                    <p>Samples allocated via a Dirichlet distribution with parameter α = 0.5 to produce severe real-world clinical skew, where one client holds predominant tuberculosis/pneumonia samples while the other holds normal/COVID scans.</p>
                  </div>

                  <div className="partition-item" style={{ borderLeftColor: '#38bdf8' }}>
                    <div className="partition-title">3. Batch Size Variation (32 vs 64)</div>
                    <p>Assessed the impact of local gradient stochasticity on global aggregation convergence when switching from batch size 32 to 64.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RESULTS & PLOTS */}
          {activeTab === 'results' && (
            <div className="research-tab-pane">
              <div className="research-section-intro">
                <h3>Empirical Findings & Training Trajectories</h3>
                <p>
                  Comparative analysis demonstrates SCAFFOLD's superior robustness against client drift, followed closely by FedProx with proximal stabilization.
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

              {/* Comparative Summary Table */}
              <div className="res-summary-table-box">
                <h4>Quantitative Comparison of Aggregation Strategies</h4>
                <table className="research-table">
                  <thead>
                    <tr>
                      <th>Strategy</th>
                      <th>IID Convergence</th>
                      <th>Non-IID Accuracy</th>
                      <th>Client Drift Control</th>
                      <th>Communication Overhead</th>
                      <th>Overall Recommendation</th>
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
          )}

          {/* TAB 5: LIMITATIONS & REFERENCES */}
          {activeTab === 'limitations' && (
            <div className="research-tab-pane">
              <div className="research-section-intro">
                <h3>Technical Limitations & Key Academic References</h3>
                <p>
                  Acknowledging real-world deployment challenges in distributed hospital systems alongside formal citations.
                </p>
              </div>

              <div className="limitations-grid">
                <div className="limit-card">
                  <h4>1. Control Variate Communication Cost</h4>
                  <p>While SCAFFOLD accelerates convergence, transmitting control variates doubles the payload exchanged per communication round, requiring reliable hospital network connections.</p>
                </div>
                <div className="limit-card">
                  <h4>2. Hospital Hardware Heterogeneity</h4>
                  <p>Client institutions with varied GPU specifications may encounter synchronization barriers during synchronous aggregation rounds.</p>
                </div>
                <div className="limit-card">
                  <h4>3. Asynchronous Client Dropouts</h4>
                  <p>Intermittent hospital connectivity can stall aggregation unless adaptive client selection protocols are deployed.</p>
                </div>
              </div>

              <div className="references-list-box">
                <h4>Core Academic References from Book Chapter</h4>
                <ol className="academic-refs-ol">
                  <li><strong>McMahan, B., Moore, E., Ramage, D., Hampson, S., & y Arcas, B. A.</strong> (2017). <em>Communication-Efficient Learning of Deep Networks from Decentralized Data.</em> Artificial Intelligence and Statistics (AISTATS).</li>
                  <li><strong>Li, T., Sahu, A. K., Zaheer, M., Sanjabi, M., Talwalkar, A., & Smith, V.</strong> (2020). <em>Federated Optimization in Heterogeneous Networks (FedProx).</em> Proceedings of Machine Learning and Systems (MLSys).</li>
                  <li><strong>Karimireddy, S. P., Kale, S., Mohri, M., Reddi, S., Stich, S., & Suresh, A. T.</strong> (2020). <em>SCAFFOLD: Stochastic Controlled Averaging for Federated Learning.</em> International Conference on Machine Learning (ICML).</li>
                  <li><strong>Dosovitskiy, A., et al.</strong> (2020). <em>An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale (ViT).</em> International Conference on Learning Representations (ICLR).</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="research-modal-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <BookOpen size={16} />
            <span>Accepted for Book Chapter Publication in ICCMN 2026 Proceedings</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a 
              href="/bookChapter.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              <FileText size={15} />
              <span>Open PDF</span>
            </a>
            <button onClick={onClose} className="btn-secondary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Image Preview Lightbox */}
      {previewImage && (
        <div className="lightbox-overlay" onClick={() => setPreviewImage(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setPreviewImage(null)}>
              <X size={20} />
            </button>
            <img src={previewImage} alt="Enlarged Plot Preview" className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
}
