export const projectsData = [
  {
    id: 'federated-ml',
    number: '01',
    theme: 'blue',
    title: 'Comparative Evaluation of Federated Aggregation Strategies for Classification of Chest X-Ray Images',
    blogTitle: 'Decentralized Healthcare AI: Benchmarking Federated Aggregation (FedAvg, FedProx, SCAFFOLD) on Chest Radiographs with Vision Transformers',
    blogSubtitle: 'A comprehensive investigation into privacy-preserving distributed deep learning across heterogeneous hospital client nodes, Dirichlet Non-IID skew, and Vision Transformers.',
    category: 'ICCMN 2026 Accepted • Distributed AI / Medical Federated Learning',
    period: 'ICCMN Conf, 2026',
    readTime: '10 min read',
    publishDate: 'Accepted in ICCMN 2026 Proceedings',
    author: 'Mehaboob S',
    authorRole: 'Software Engineer & Distributed AI Researcher',
    shortDesc: 'A multi-institutional distributed deep learning study evaluating FedProx, FedAvg, and SCAFFOLD aggregation across 2 clients and 1 server with IID and Dirichlet Non-IID chest radiographs.',
    fullDesc: 'Accepted as a book chapter in ICCMN 2026 proceedings. We formulated decentralized healthcare disease detection using Vision Transformers (ViT). Investigated how proximal regularization (FedProx) and control variates (SCAFFOLD) overcome statistical client drift and class imbalance across varying batch sizes (32 & 64).',
    architecture: 'Vision Transformer (ViT-Small/16) decentralized across 2 hospital clients and 1 central parameter server. Employs Dynamic Adaptive Focal Loss (DAFL) and compares gradient aggregation dynamics under severe Non-IID distributions (Dirichlet α=0.5).',
    highlights: [
      'Explored FedAvg, FedProx, and SCAFFOLD across 2 clients & 1 server aggregating global weights without exposing raw patient data.',
      'Evaluated both IID and Dirichlet Non-IID distributions with batch size variations (32 vs 64) for multi-disease diagnosis.',
      'Achieved peak accuracy (94%–97%) with SCAFFOLD under severe statistical client drift, significantly outperforming standard FedAvg baseline.',
    ],
    technologies: ['Distributed ML', 'PyTorch', 'Vision Transformer (ViT)', 'FedProx', 'SCAFFOLD', 'FedAvg', 'Dirichlet Non-IID', 'Dynamic Adaptive Focal Loss'],
    githubLink: 'https://github.com/MehaboobS',
    hasResearchInterface: true,
    pdfLink: '/bookChapter.pdf',
    downloadName: 'Comparative_Evaluation_Federated_Learning_ICCMN2026.pdf',
    tableOfContents: [
      { id: 'sec-intro', title: '1. Clinical Privacy & Federated Learning' },
      { id: 'sec-arch', title: '2. Vision Transformer (ViT) Topology' },
      { id: 'sec-algo', title: '3. FedAvg vs FedProx vs SCAFFOLD' },
      { id: 'sec-loss', title: '4. Dynamic Adaptive Focal Loss (DAFL)' },
      { id: 'sec-setup', title: '5. Experimental Setup & Dirichlet Non-IID' },
      { id: 'sec-results', title: '6. Empirical Plots & Convergence Findings' },
      { id: 'sec-limitations', title: '7. Clinical Deployment Limitations' },
      { id: 'sec-refs', title: '8. Academic Bibliography' },
    ]
  },
  {
    id: 'agri-ai',
    number: '02',
    theme: 'green',
    title: 'AI-Powered Digital Agriculture Network',
    blogTitle: 'Architecting an AI-Powered Precision Agriculture Platform: Satellite Telemetry, FastAPI Microservices, and Machine Learning',
    blogSubtitle: 'How we bridged Sentinel-2 satellite imagery, real-time meteorological feeds, and predictive machine learning to provide actionable agronomic decision support.',
    category: 'AI / ML & Full-Stack System',
    period: '2026 – Present',
    readTime: '8 min read',
    publishDate: 'September 2026',
    author: 'Mehaboob S',
    authorRole: 'Software Engineer & Full-Stack Developer',
    shortDesc: 'Localized precision agriculture platform fusing satellite telemetry, real-time meteorological feeds, and machine learning models for agronomic decision support.',
    fullDesc: 'An advanced precision agriculture platform designed to provide actionable agronomic decision support for farmers and agricultural managers. It ingests multi-source environmental telemetry, evaluates crop stages and soil health, and serves intelligent recommendations through a modern responsive dashboard.',
    architecture: 'FastAPI Async REST microservices communicating with PostgreSQL data models for farm zones, crops, and telemetry logs. Integrated satellite imagery and weather API endpoints with machine learning models for soil moisture, yield forecasting, and disease risk assessment.',
    highlights: [
      'Built localized crop and soil recommendation engine integrating multi-source satellite telemetry and meteorological APIs.',
      'Engineered high-performance FastAPI microservices and responsive React.js telemetry dashboard with PostgreSQL storage.',
      'Deployed automated alerts for soil moisture anomalies, disease risk windows, and optimized irrigation schedules.',
    ],
    technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Machine Learning', 'Satellite APIs', 'REST APIs', 'Docker'],
    githubLink: 'https://github.com/MehaboobS',
    tableOfContents: [
      { id: 'sec-problem', title: '1. The Agronomic Challenge' },
      { id: 'sec-system', title: '2. End-to-End System Architecture' },
      { id: 'sec-satellite', title: '3. Satellite NDVI & Telemetry Pipeline' },
      { id: 'sec-backend', title: '4. High-Throughput FastAPI Microservices' },
      { id: 'sec-ml', title: '5. Crop Recommendation & Moisture ML Models' },
      { id: 'sec-dashboard', title: '6. Real-Time Telemetry Dashboard' },
      { id: 'sec-takeaways', title: '7. Key Engineering Takeaways' },
    ],
    blogSections: [
      {
        id: 'sec-problem',
        title: '1. The Agronomic Challenge: Beyond Guesswork Farming',
        lead: 'Agricultural yields depend heavily on dynamic environmental variables—soil moisture levels, localized temperature fluctuations, and subtle canopy health changes.',
        content: `Traditional farming frequently suffers from either over-irrigation or delayed pathogen detection. Our goal was to design an intelligent, localized decision-support system that equips agricultural managers and farmers with real-time agronomic insights powered by satellite imagery, live weather station telemetry, and machine learning models.`,
        callout: {
          title: 'Core System Objective',
          text: 'Deliver hyper-local agronomic recommendations by synthesizing multi-spectral satellite imagery with ground telemetry, minimizing water waste and forecasting disease risk windows before visible crop damage occurs.'
        }
      },
      {
        id: 'sec-system',
        title: '2. End-to-End System Architecture',
        lead: 'The platform separates concerns into asynchronous telemetry ingestion workers, a robust relational data model, and an intuitive client visualization dashboard.',
        content: `The system is architected around high-throughput FastAPI REST microservices. Telemetry from public satellite data providers and weather stations is parsed, normalized, and cached in Redis before persisting into structured PostgreSQL relational schemas. React.js interfaces query these normalized representations to provide interactive spatial visualizations and telemetry heatmaps.`,
        codeSnippet: {
          language: 'python',
          title: 'FastAPI Telemetry Ingestion Endpoint',
          code: `@app.post("/api/v1/telemetry/ingest", status_code=status.HTTP_201_CREATED)
async def ingest_field_telemetry(
    payload: TelemetryIngestSchema,
    db: AsyncSession = Depends(get_db_session)
):
    # Validate farm zone and sensor signatures
    zone = await crud_zone.get(db, id=payload.zone_id)
    if not zone:
        raise HTTPException(status_code=404, detail="Zone not found")
        
    # Trigger background ML inference for soil moisture & disease risk
    inference_task = run_agronomic_inference.delay(payload.dict())
    
    # Store normalized observation in PostgreSQL
    telemetry_record = await crud_telemetry.create(db, obj_in=payload)
    return {"status": "success", "record_id": telemetry_record.id, "task": inference_task.id}`
        }
      },
      {
        id: 'sec-satellite',
        title: '3. Satellite NDVI & Telemetry Pipeline',
        lead: 'Extracting Normalized Difference Vegetation Index (NDVI) values allows monitoring photosynthetic canopy activity without expensive on-field sensor arrays.',
        content: `We built scheduled data collectors that query Sentinel-2 and Landsat optical bands for specified farm coordinate polygons. By calculating the ratio between the Near-Infrared (NIR) and Red spectral bands:
        
NDVI = (NIR - Red) / (NIR + Red)

The pipeline flags early-stage crop moisture deficits and chlorophyll degradation days before they become observable to the naked eye.`,
        metrics: [
          { value: '10m', label: 'Spatial Resolution' },
          { value: '5 Days', label: 'Revisit Cadence' },
          { value: '0.01', label: 'NDVI Precision Index' },
          { value: '99.4%', label: 'API Ingestion Uptime' }
        ]
      },
      {
        id: 'sec-backend',
        title: '4. High-Throughput FastAPI Microservices & Data Modeling',
        lead: 'Asynchronous concurrency ensures responsive dashboard telemetry updates even during batch data processing.',
        content: `Python's FastAPI framework with SQLAlchemy 2.0 async engines enabled non-blocking I/O across hundreds of telemetry logs. Relational models capture spatial boundaries, crop varieties, historical harvest yields, and sensor data points. Foreign key indexing and composite temporal indices ensure queries over months of telemetry execute in sub-15ms latency.`,
        callout: {
          title: 'Database Performance Optimization',
          text: 'Using composite indices on (farm_id, timestamp DESC) reduced telemetry time-series query latency by over 74% compared to unindexed scans.'
        }
      },
      {
        id: 'sec-ml',
        title: '5. Machine Learning Crop Recommendation & Soil Moisture Models',
        lead: 'Predictive analytics combine soil nitrogen, phosphorus, potassium (NPK) ratios with meteorological forecasts.',
        content: `We developed multi-target regression and classification models using Scikit-Learn and PyTorch. The crop recommendation engine evaluates current soil chemistry alongside seasonal temperature and rainfall distributions to recommend the highest-yielding crop cultivars. Simultaneously, soil moisture regression models forecast 48-hour moisture depletion curves to recommend optimal automated irrigation schedules.`,
        codeSnippet: {
          language: 'python',
          title: 'Soil Moisture Regression Model Inference',
          code: `def predict_irrigation_window(soil_data: dict, weather_forecast: list) -> dict:
    features = np.array([[
        soil_data['nitrogen'], soil_data['phosphorus'], soil_data['potassium'],
        soil_data['ph'], weather_forecast[0]['temp_max'], weather_forecast[0]['humidity']
    ]])
    predicted_moisture_loss = moisture_model.predict(features)[0]
    hours_until_stress = max(0, (soil_data['current_moisture'] - WILTING_POINT) / predicted_moisture_loss)
    
    return {
        "hours_until_stress": round(hours_until_stress, 1),
        "recommended_irrigation_liters": calculate_water_quota(hours_until_stress),
        "urgency": "HIGH" if hours_until_stress < 12 else "NORMAL"
    }`
        }
      },
      {
        id: 'sec-dashboard',
        title: '6. Real-Time Telemetry Dashboard',
        lead: 'An ergonomic user experience built with React.js, modern data visualizations, and dark/light responsive layouts.',
        content: `The frontend application presents farmers with color-coded risk heatmaps, soil moisture progression curves, satellite NDVI overlays, and instant recommendation cards. Real-time toast alerts inform operators when temperature humidity thresholds breach critical pathogen propagation windows.`,
      },
      {
        id: 'sec-takeaways',
        title: '7. Key Engineering Takeaways',
        lead: 'Reflections on building resilient agricultural IoT and AI applications.',
        content: `1. **Resilience to Missing Telemetry:** Real-world weather APIs frequently suffer intermittent dropouts; implementing linear interpolation and imputation fallbacks was essential.
2. **Asynchronous Architecture:** Decoupling satellite ingestion from user-facing REST APIs ensured zero perceptible latency on client dashboard interactions.
3. **Actionable Insights over Raw Data:** Farmers require straightforward decisions ("Irrigate 400L at 6:00 PM") rather than complex NDVI histograms.`,
      }
    ]
  },
  {
    id: 'eval-platform',
    number: '03',
    theme: 'blue',
    title: 'Online Coding Assessment & Automated Evaluation Platform',
    blogTitle: 'Building an Automated Code Judge: Secure Sandboxing with Docker, Resource Limiting, and Millisecond Telemetry',
    blogSubtitle: 'Designing a secure multi-language algorithmic evaluation platform executing untrusted user C++ and Python code with millisecond precision.',
    category: 'Sandboxed Systems & Code Judge',
    period: '2026',
    readTime: '7 min read',
    publishDate: 'August 2026',
    author: 'Mehaboob S',
    authorRole: 'Software Engineer & Systems Specialist',
    shortDesc: 'Automated code judge executing user-submitted C++ and Python algorithms inside isolated Docker sandboxes with millisecond runtime and memory measurement.',
    fullDesc: 'A competitive coding assessment platform similar to LeetCode / HackerRank. Built to handle problem creation, automated code compilation, test-case verification against time & memory bounds, and comprehensive submission telemetry.',
    architecture: 'Docker containerized runner isolating untrusted user code execution with strict resource bounds. FastAPI backend coordinates problem catalogs, manages queues, dispatches code to Docker sandboxes, and verifies against test suites. PostgreSQL stores users, problems, test cases, and execution metrics.',
    highlights: [
      'Engineered sandboxed Docker execution runners isolating untrusted C++ and Python code with strict CPU, memory, and timeout limits.',
      'Built full evaluation pipeline assessing compilation accuracy, test suites, execution time, and memory usage metrics.',
      'Developed responsive React.js candidate interface with code editor, custom test runners, and real-time verdict streaming.',
    ],
    technologies: ['C++', 'Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Docker Sandboxes', 'REST APIs', 'DSA'],
    githubLink: 'https://github.com/MehaboobS',
    tableOfContents: [
      { id: 'sec-threat', title: '1. The Sandboxed Security Threat' },
      { id: 'sec-arch', title: '2. Runner & Dispatch Architecture' },
      { id: 'sec-docker', title: '3. Docker & cgroups Isolation' },
      { id: 'sec-pipeline', title: '4. Compilation & Test Suite Pipeline' },
      { id: 'sec-benchmarks', title: '5. Latency & Telemetry Benchmarks' },
      { id: 'sec-takeaways', title: '6. Security Lessons Learned' },
    ],
    blogSections: [
      {
        id: 'sec-threat',
        title: '1. The Sandbox Security Challenge: Untrusted User Code',
        lead: 'Executing arbitrary user code submitted over the internet is one of the most hazardous undertakings in systems engineering.',
        content: `A malicious or poorly written user submission could attempt fork bombs, infinite recursive memory allocation, network port scans, or system filesystem attacks. To build a robust evaluation judge, we needed absolute sandboxed containment, deterministic runtime environments, and exact sub-second execution limits.`,
        callout: {
          title: 'Primary Security Imperatives',
          text: 'Enforce zero network access inside runners, read-only root filesystems, strict 256MB memory caps, and hard 2.0-second SIGKILL timeout thresholds.'
        }
      },
      {
        id: 'sec-arch',
        title: '2. Runner & Dispatch Architecture',
        lead: 'A decoupled queue coordinates code submissions, sandbox spawning, and verdict recording.',
        content: `The architecture separates the public FastAPI REST endpoints from the execution runners. When a candidate submits code, the problem test suites are fetched, and a dedicated transient Docker sandbox is provisioned. Execution metrics (runtime in milliseconds, peak RSS memory in kilobytes, stdout, stderr, and exit codes) are captured and returned to the caller.`,
      },
      {
        id: 'sec-docker',
        title: '3. Docker & cgroups Isolation',
        lead: 'Restricting kernel system calls and memory limits at the container level.',
        content: `Using Linux control groups (cgroups) and seccomp profiles, each isolated container is strictly allocated a maximum of 1 CPU core and 256MB RAM. The container is initialized with no-network capabilities (\`--network none\`) and temporary memory filesystems (\`tmpfs\`) to prevent persistent writes.`,
        codeSnippet: {
          language: 'python',
          title: 'Docker Sandbox Execution Command Builder',
          code: `def build_sandboxed_runner(source_file: str, lang: str, time_limit: int, memory_limit_mb: int):
    return [
        "docker", "run", "--rm",
        "--network", "none",                    # Disallow all network traffic
        "--memory", f"{memory_limit_mb}m",       # Enforce hard RAM ceiling
        "--memory-swap", f"{memory_limit_mb}m",  # Disallow swap escalation
        "--cpus", "1.0",                        # Restrict to single CPU core
        "--pids-limit", "64",                   # Prevent fork bombs
        "-v", f"{source_file}:/app/solution:ro",# Mount code as READ-ONLY
        f"judge-runner-{lang}:latest",
        "/bin/sh", "/app/run.sh", str(time_limit)
    ]`
        }
      },
      {
        id: 'sec-pipeline',
        title: '4. Compilation & Test Suite Verification Pipeline',
        lead: 'Two-stage verification separates compiler diagnostics from algorithmic correctness.',
        content: `For compiled languages like C++ (GCC 13 / C++20 with \`-O3 -Wall\`), compilation is executed first. If compilation errors occur, formatted compiler diagnostics are immediately streamed to the user. For valid binaries and interpreted Python code, the runner executes against multiple hidden test cases sequentially, halting immediately upon Time Limit Exceeded (TLE) or Memory Limit Exceeded (MLE).`,
      },
      {
        id: 'sec-benchmarks',
        title: '5. Latency & Telemetry Benchmarks',
        lead: 'Sub-millisecond runtime measurement using high-resolution kernel monotonic clocks.',
        content: `Execution benchmarks demonstrate consistent, predictable runner overhead:`,
        metrics: [
          { value: '< 45ms', label: 'Container Startup Overhead' },
          { value: '± 2ms', label: 'Runtime Timer Accuracy' },
          { value: '256 MB', label: 'Hard Memory Threshold' },
          { value: '100%', label: 'Container Process Isolation' }
        ]
      },
      {
        id: 'sec-takeaways',
        title: '6. Security Lessons Learned',
        lead: 'Crucial considerations when executing untrusted computational workloads.',
        content: `1. **Always Kill Zombie Containers:** If an execution exceeds timeout limits, sending standard SIGTERM is insufficient for stubborn loops; a deferred SIGKILL daemon is mandatory.
2. **Never Trust User Formats:** Sanitize source code encoding to avoid control character injection in shell execution wrappers.
3. **Memory Swapping Pitfall:** By default, Docker allows containers to swap memory to disk. Setting \`--memory-swap\` equal to \`--memory\` is essential to prevent out-of-memory bypasses.`,
      }
    ]
  },
  {
    id: 'churn-ml',
    number: '04',
    theme: 'purple',
    title: 'Customer Churn Prediction Intelligence System',
    blogTitle: 'Forecasting Customer Churn: End-to-End Machine Learning Pipeline & Winning 2nd Prize at DSATM Datathon',
    blogSubtitle: 'A complete retrospective on exploratory data analysis, class imbalance mitigation, feature engineering, and model interpretability with SHAP.',
    category: 'Machine Learning & Predictive Analytics',
    period: 'Datathon 2nd Prize Winner',
    readTime: '6 min read',
    publishDate: 'Datathon Award 2026',
    author: 'Mehaboob S',
    authorRole: 'Machine Learning Engineer',
    shortDesc: 'Predictive intelligence pipeline analyzing behavioral engagement telemetry to forecast customer churn risk with actionable retention recommendations.',
    fullDesc: 'Developed during the prestigious Datathon Challenge at DSATM (awarded 2nd Prize). The platform preprocesses customer telemetry, analyzes multi-dimensional feature distributions, and employs predictive ML algorithms to anticipate customer departure.',
    architecture: 'Python-based exploratory data analysis and feature engineering pipeline paired with Scikit-Learn and PyTorch classifiers. Evaluation metrics included ROC-AUC, precision-recall optimization, and interpretability scoring.',
    highlights: [
      'Secured 2nd Prize at DSATM Datathon Challenge among competitive university engineering teams.',
      'Engineered predictive classification pipelines identifying multi-dimensional churn risks with actionable insights.',
      'Constructed feature importance rankings using SHAP interpretations to recommend targeted retention campaigns.',
    ],
    technologies: ['Python', 'Machine Learning', 'PyTorch', 'Scikit-Learn', 'Feature Engineering', 'Data Analytics', 'ROC-AUC Optimization'],
    githubLink: 'https://github.com/MehaboobS',
    tableOfContents: [
      { id: 'sec-challenge', title: '1. The Datathon Challenge' },
      { id: 'sec-eda', title: '2. Exploratory Data Analysis & Churn Drivers' },
      { id: 'sec-fe', title: '3. Feature Engineering & Scaling' },
      { id: 'sec-models', title: '4. Model Benchmarking (XGBoost, RF, PyTorch)' },
      { id: 'sec-shap', title: '5. Model Interpretability with SHAP' },
      { id: 'sec-takeaways', title: '6. Business Impact & Retrospective' },
    ],
    blogSections: [
      {
        id: 'sec-challenge',
        title: '1. The Datathon Challenge & Real-World Telemetry',
        lead: 'Customer churn represents substantial recurring revenue loss across digital services. The challenge was to anticipate churn signals weeks in advance.',
        content: `At the DSATM Datathon Challenge, teams were provided with multi-dimensional behavioral telemetry encompassing user contract durations, support ticket frequency, monthly invoice variations, and payment history. Our mission was to develop an end-to-end predictive pipeline that maximized ROC-AUC while providing actionable retention insights.`,
        callout: {
          title: 'Award Recognition',
          text: 'Awarded 2nd Prize among dozens of competitive university engineering and data science teams for predictive accuracy and model interpretability.'
        }
      },
      {
        id: 'sec-eda',
        title: '2. Exploratory Data Analysis & Churn Drivers',
        lead: 'Uncovering the underlying behavioral differences between loyal and departing customers.',
        content: `Initial data exploration revealed heavy class imbalance—approximately 26% of users churned, while 74% remained active. Correlation heatmaps identified month-to-month contracts, fiber optic internet packages, and recurring billing disputes as top correlators with churn risk.`,
        metrics: [
          { value: '2nd Prize', label: 'Hackathon Award' },
          { value: '0.892', label: 'Test ROC-AUC Score' },
          { value: '88.4%', label: 'Precision-Recall AUC' },
          { value: '< 15ms', label: 'Inference Latency' }
        ]
      },
      {
        id: 'sec-fe',
        title: '3. Feature Engineering & Scaling',
        lead: 'Transforming raw telemetry into high-signal feature vectors.',
        content: `We engineered synthetic interaction features such as "Charges-to-Tenure Ratio" and "Support Tickets per Month". Numerical values were normalized with RobustScaler to mitigate outlier influence, while categorical features were encoded using target-encoding and one-hot encodings.`,
        codeSnippet: {
          language: 'python',
          title: 'Feature Engineering Pipeline with Scikit-Learn',
          code: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import RobustScaler, OneHotEncoder

numerical_cols = ['tenure', 'MonthlyCharges', 'TotalCharges', 'charge_tenure_ratio']
categorical_cols = ['Contract', 'PaymentMethod', 'InternetService', 'TechSupport']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', RobustScaler(), numerical_cols),
        ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), categorical_cols)
    ]
)`
        }
      },
      {
        id: 'sec-models',
        title: '4. Model Benchmarking: From Logistic Regression to Gradient Boosting',
        lead: 'Systematic model evaluation under stratified 5-fold cross validation.',
        content: `We systematically trained and tuned Logistic Regression baselines, Random Forests, XGBoost, and a deep PyTorch Multilayer Perceptron (MLP). XGBoost with tuned hyper-parameters (\`max_depth=4\`, \`learning_rate=0.05\`, \`scale_pos_weight=2.8\`) delivered the highest cross-validation ROC-AUC (0.892) with robust generalization on unseen test folds.`,
      },
      {
        id: 'sec-shap',
        title: '5. Model Interpretability with SHAP Values',
        lead: 'Black-box predictions are useless to business teams; interpretability is what drives actual retention.',
        content: `Using TreeSHAP (SHapley Additive exPlanations), our pipeline decomposes each customer's churn prediction into individual feature contributions. The visual explanations pinpointed exactly why a given account was flagged (e.g. recent price hike combined with two unresolved technical support tickets).`,
        callout: {
          title: 'Actionable Business Insight',
          text: 'Accounts with month-to-month contracts had a 4.2x higher churn propensity during the first 6 months. Offering targeted 1-year loyalty discounts during this window projected a 32% reduction in customer attrition.'
        }
      },
      {
        id: 'sec-takeaways',
        title: '6. Business Impact & Retrospective',
        lead: 'Reflections from the Datathon hackathon experience.',
        content: `1. **Address Class Imbalance Early:** Optimizing raw classification accuracy on imbalanced data is deceptive; focusing strictly on ROC-AUC and F1-score optimization is paramount.
2. **Feature Engineering Trumps Complex Models:** Crafting interaction terms based on domain understanding contributed more to the final ROC-AUC score than switching from XGBoost to deep neural nets.
3. **Interpretability Wins Competitions:** Presenting clear SHAP decision explanations to the judges set our solution apart from pure black-box submissions.`,
      }
    ]
  },
];
