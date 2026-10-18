# Mehaboob S — Software Engineer & AI/ML Developer Portfolio

A modern, high-performance static portfolio website built with **React**, **Vite**, and **Vanilla CSS**.

---

## 🚀 Features

- **Cyber Obsidian & Neon Design**: Modern dark theme with glassmorphism, glowing accents, and smooth animations.
- **Hero & Interactive Terminal**: Developer bio, real-time status pill, quick stats (9.00 CGPA, B2B microservices, hackathons), and verified social links.
- **Detailed About & Core Pillars**: Scalable backends, AI/ML, Docker sandboxed execution, and DSA fundamentals.
- **Interactive Skills Matrix**: Categorized and filterable tabs for Languages, Backend & APIs, Frontend, Databases, Cloud & DevOps, and Core CS.
- **Work History Timeline**: Software Engineering Internship at **Ellipsonic Solution** with impact metrics and tech tags.
- **Featured Projects Showcase**:
  - *AI-Powered Digital Agriculture Network* (FastAPI, React.js, PostgreSQL, Machine Learning)
  - *Online Coding Assessment & Automated Evaluation Platform* (Docker sandboxes, C++, Python, FastAPI, React.js)
  - *Customer Churn Prediction System* (Datathon 2nd Prize Winner)
  - In-depth architectural modal breakdowns with technical specifications.
- **Education & Honors**: Jyothy Institute of Technology (CGPA 9.00 - Topper), PUC (94.40%), SSLC (94.56%), plus Coding Challenge 1st Prize and Datathon 2nd Prize.
- **Interactive Contact Hub**: Direct copy-to-clipboard for Email and Phone with toast feedback, and functional contact form.
- **Integrated Full Resume Viewer**: In-browser resume dialog with print / PDF export support.

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🌐 How to Deploy to Vercel (Step-by-Step)

### Option 1: Deploy via Vercel Dashboard & GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/MehaboobS/mehaboob-portfolio.git
   git push -u origin main
   ```
2. **Open Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. **Import Project**:
   - Click **"Add New..."** -> **"Project"**.
   - Select your `mehaboob-portfolio` repository from the list.
4. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (Vercel automatically detects this).
   - **Root Directory**: `./` (or leave default).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy**:
   - Click **"Deploy"**.
   - Within 30–60 seconds, your portfolio will be live at `https://your-project.vercel.app`!
   - Every time you push changes to `main`, Vercel will automatically re-deploy.

---

### Option 2: Deploy directly via Vercel CLI (Fastest from Terminal)

1. **Install Vercel CLI globally**:
   ```bash
   npm i -g vercel
   ```
2. **Log in to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy from project directory**:
   ```bash
   vercel
   ```
   Follow the simple terminal prompts (defaults are already configured via `vercel.json`).
4. **Deploy to production**:
   ```bash
   vercel --prod
   ```
