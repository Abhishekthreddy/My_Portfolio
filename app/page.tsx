"use client";

import { useEffect, useRef } from "react";

/* ----------------------------- Site content ----------------------------- */

const CONTACT = {
  name: "Abhishekth Reddy Thanam",
  tagline: "AI Engineer • Agentic AI • LLM Evaluation & Guardrails • Healthcare",
  linkedin: "https://www.linkedin.com/in/abhishekthreddy/",
  github: "https://github.com/Abhishekthreddy",
  email: "balathanam2002@gmail.com",
  phone: "+18138959529",
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const ABOUT =
  "I'm an **AI Engineer** with 4+ years building production AI systems in healthcare. I specialize in **agentic AI and multi-agent workflows** with LangGraph, **MCP tool calling** and RAG on AWS (Bedrock, SageMaker, EKS, OpenSearch) and GCP (Vertex AI). At UnitedHealth Group I build **HIPAA-compliant agent platforms** for prior authorization and clinical workflows, backed by **LLM evaluation** (LangSmith, DeepEval, LLM-as-a-judge) and **layered guardrails** (Bedrock Guardrails, NeMo Guardrails, PHI redaction, human-in-the-loop review). My background spans ML engineering, clinical NLP, LLM fine-tuning (QLoRA) and MLOps (MLflow, Airflow, CI/CD).";

const SKILLS = [
  {
    title: "Agentic AI & LLMs",
    icons: ["langchain", "huggingface", "meta", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"],
    desc: "LangGraph, LangChain, multi-agent orchestration, MCP tool calling, RAG, hybrid search with reranking, and QLoRA/PEFT fine-tuning on Bedrock, OpenAI and Llama 3.1.",
  },
  {
    title: "LLM Evaluation & Guardrails",
    icons: ["langchain", "nvidia", "python"],
    desc: "LangSmith, DeepEval, RAGAS and LLM-as-a-judge on golden datasets, plus Bedrock and NeMo Guardrails, PHI/PII redaction, prompt-injection defense and human-in-the-loop review.",
  },
  {
    title: "ML & Clinical NLP",
    icons: ["pytorch", "tensorflow", "scikitlearn", "spacy"],
    desc: "PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, BioBERT and scispaCy for prediction, clinical NER and SHAP explainability.",
  },
  {
    title: "Cloud, MLOps & Data",
    icons: ["googlecloud", "docker", "kubernetes", "mlflow"],
    desc: "AWS, GCP Vertex AI, Docker, EKS, MLflow, Airflow, FastAPI and CI/CD, with PostgreSQL (pgvector), BigQuery, OpenSearch, Kafka, Flink and FHIR/HL7 pipelines.",
  },
];

const EXPERIENCE = [
  {
    role: "Artificial Intelligence Engineer",
    company: "UnitedHealth Group",
    date: "Jun 2025 — Present",
    location: "USA",
    points: [
      "Architected and deployed a **multi-agent prior-authorization system** using LangGraph and MCP tool calling on AWS (Bedrock, Lambda, EKS), orchestrating intake, clinical-evidence and determination agents to cut authorization turnaround from **days to hours**.",
      "Built an **LLM evaluation framework** using LangSmith, DeepEval and LLM-as-a-judge against clinician-labeled golden datasets, tracking accuracy, policy faithfulness and hallucination rate as automated CI/CD release gates.",
      "Implemented **HIPAA-compliant guardrails** using Bedrock Guardrails and NeMo Guardrails for PHI redaction, prompt-injection defense and schema-validated outputs, with clinician-in-the-loop review for every adverse determination.",
      "Developed a **secure MCP tool gateway** with typed contracts, OAuth-based access control, rate limiting and audit logging, giving agents least-privilege access to claims, eligibility and FHIR-based EHR systems.",
      "Designed a hybrid retrieval pipeline over **50K+** payer policy and clinical guideline documents using Amazon OpenSearch vector search, Bedrock Titan embeddings, BM25 and cross-encoder reranking, improving retrieval precision by **~30%** with source-cited answers.",
    ],
  },
  {
    role: "Graduate Research Analyst",
    company: "Robert Morris University",
    date: "Jan 2024 — May 2025",
    location: "USA",
    points: [
      "Built a **RAG-based academic advising assistant** (LangChain, OpenAI, ChromaDB) over RMU's student handbook, course catalog and policies, giving students instant source-cited answers on prerequisites, deadlines and degree requirements.",
      "Engineered hybrid retrieval (BM25 + vector search) with recursive chunking and OpenAI embeddings, validated with RAGAS on **200+** test questions, improving answer accuracy by **25%** over a baseline LLM.",
      "Analyzed student engagement and enrollment data with Python, SQL and Tableau to find frequent advising questions and course-demand trends, and presented findings to faculty and administrators to support advising and scheduling decisions.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Citius Health",
    date: "Jan 2022 — Jun 2023",
    location: "India",
    points: [
      "Developed **30-day readmission and high-risk patient prediction models** with XGBoost and scikit-learn on **500K+** EHR and claims records in BigQuery for a US payer client, reaching **ROC-AUC of 0.82** with SHAP explainability for clinical review.",
      "Built a **clinical NLP pipeline** using BioBERT and scispaCy to extract diagnoses, medications and procedures from clinical notes into FHIR resources via Google Cloud Healthcare API, improving coding accuracy by **20%**.",
      "Deployed models on Vertex AI with Vertex Pipelines, Cloud Composer (Airflow), Docker and Cloud Build CI/CD, adding model monitoring, drift detection and scheduled retraining for HIPAA-compliant production releases.",
      "Prototyped a LangChain and GPT-3.5 question-answering assistant over payer policy and clinical guideline documents on Cloud Run, showing grounded, source-cited answers that shaped the client's GenAI roadmap.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Clinical Documentation LLM Fine-Tuning",
    desc: "Fine-tuned Llama 3.1-8B with QLoRA/PEFT (PyTorch), cutting hallucinations by 34% and raising clinical entity-extraction accuracy by 28%. Tracked 12 iterations in MLflow and deployed a quantized FastAPI endpoint with 3× faster inference at 96% of full-precision accuracy.",
    tags: ["PyTorch", "QLoRA", "PEFT", "Llama 3.1", "MLflow", "FastAPI"],
    link: "https://github.com/Abhishekthreddy",
  },
  {
    title: "Real-Time Fraud Detection Pipeline",
    desc: "A Kafka–Flink streaming pipeline with real-time feature engineering and Redis-backed Feast feature serving, plus low-latency FastAPI fraud scoring with SHAP explainability and Grafana monitoring.",
    tags: ["Apache Kafka", "Apache Flink", "Feast", "Redis", "FastAPI", "SHAP", "Grafana"],
    link: "https://github.com/Abhishekthreddy/Real-Time-Fraud-Detection",
  },
];

const EDUCATION = [
  {
    kind: "edu" as const,
    title: "M.S. Data Analytics",
    subtitle: "Robert Morris University, USA",
    meta: "Aug 2023 — May 2025",
  },
  {
    kind: "edu" as const,
    title: "B.Tech, Computer Science & Engineering",
    subtitle: "ICFAI University, India",
    meta: "Aug 2019 — Jun 2023",
  },
  {
    kind: "cert" as const,
    title: "AWS Certified Machine Learning Engineer",
    subtitle: "Associate",
    meta: "Amazon Web Services",
  },
];

/* ------------------------------- Icons ---------------------------------- */

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function GradCapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}
function CertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* --------------------------- Helper components -------------------------- */

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-bold text-[var(--heading)]">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[var(--heading)] tracking-tight">
        {title}
      </h2>
      <div className="section-underline" />
      {subtitle ? <p className="mt-5 text-[var(--foreground)]">{subtitle}</p> : null}
    </div>
  );
}

/* --------------------- Animated constellation canvas -------------------- */

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let points: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((width * height) / 14000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,255,255,${0.16 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of points) {
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

/* -------------------------------- Page ---------------------------------- */

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ----------------------------- Hero ----------------------------- */}
      <section
        id="hero"
        className="bg-hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <ParticleField />
        <div className="fade-up relative z-10 px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl">
            {CONTACT.name}
          </h1>
          <p className="mt-5 text-lg font-bold text-white/90 sm:text-2xl">
            {CONTACT.tagline}
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a className="hero-social" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="hero-social" href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="hero-social" href={`mailto:${CONTACT.email}`} aria-label="Email">
              <MailIcon />
            </a>
            <a className="hero-social" href={`tel:${CONTACT.phone}`} aria-label="Phone">
              <PhoneIcon />
            </a>
          </div>
          <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="border-b-2 border-transparent pb-0.5 font-semibold text-white/90 transition hover:border-white hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <a href="#about" aria-label="Scroll to content" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/90 animate-bounce-soft">
          <ChevronDown />
        </a>
      </section>

      {/* ----------------------------- About ---------------------------- */}
      <section id="about" className="px-6 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] font-extrabold text-[var(--heading)] sm:text-[40px]">My Story</h2>
          <div className="section-underline" />
          <div className="bg-brand-gradient mx-auto mt-10 flex h-32 w-32 items-center justify-center rounded-full text-3xl font-extrabold text-white shadow-lg">
            AT
          </div>
          <p className="mt-9 text-base leading-8 text-[var(--foreground)] sm:text-lg">
            <RichText text={ABOUT} />
          </p>
          <div className="mt-9 flex justify-center">
            <span className="status-pill">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
              Open to AI Engineer roles · USA — open to relocate
            </span>
          </div>
        </div>

        {/* ----------------------------- Skills --------------------------- */}
        <div id="skills" className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <div key={s.title} className="card p-7 text-center">
              <h3 className="mb-4 text-base font-semibold text-[var(--heading)]">{s.title}</h3>
              <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
                {s.icons.map((slug) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={slug}
                    src={slug.startsWith("http") ? slug : `https://cdn.simpleicons.org/${slug}`}
                    alt={slug}
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-sm leading-6 text-[var(--foreground)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- Experience ------------------------- */}
      <section id="experience" className="px-6 pt-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Experience"
            subtitle="Agentic AI, LLM and ML systems in healthcare."
          />
          <div className="space-y-7">
            {EXPERIENCE.map((e) => (
              <article key={e.company} className="accent-card p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--heading)]">
                      {e.role} <span className="text-[var(--blue)]">/ {e.company}</span>
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--muted)]">{e.location}</p>
                  </div>
                  <span className="text-sm text-[var(--muted)]">{e.date}</span>
                </div>
                <ul className="mt-5">
                  {e.points.map((pt, i) => (
                    <li key={i} className="exp-bullet text-[15px] leading-7 text-[var(--foreground)]">
                      <RichText text={pt} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- Projects -------------------------- */}
      <section id="projects" className="px-6 pt-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Featured Projects" subtitle="Fine-tuned LLMs and real-time ML, end to end." />
          <div className="space-y-7">
            {PROJECTS.map((p) => (
              <article key={p.title} className="accent-card p-7 sm:p-8">
                <h3 className="text-xl font-extrabold text-[var(--heading)]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--foreground)]">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <a className="btn-outline mt-6" href={p.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Education -------------------------- */}
      <section id="education" className="px-6 pt-24 pb-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Education & Certifications" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {EDUCATION.map((ed) => (
              <div key={ed.title} className="card flex items-start gap-4 p-6">
                <div className="bg-brand-gradient flex h-12 w-12 flex-none items-center justify-center rounded-xl text-white">
                  {ed.kind === "edu" ? <GradCapIcon /> : <CertIcon />}
                </div>
                <div>
                  <h3 className="font-extrabold text-[var(--heading)]">{ed.title}</h3>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{ed.subtitle}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--blue)]">{ed.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- Footer --------------------------- */}
      <footer className="bg-hero-gradient px-6 py-12 text-center text-white">
        <div className="flex items-center justify-center gap-4">
          <a className="hero-social" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="hero-social" href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a className="hero-social" href={`mailto:${CONTACT.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
        <p className="mt-5 text-sm text-white/90">
          © 2026 {CONTACT.name} — AI Engineer
        </p>
      </footer>
    </main>
  );
}
