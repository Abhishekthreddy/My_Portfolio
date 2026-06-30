"use client";

import { useEffect, useRef } from "react";

/* ----------------------------- Site content ----------------------------- */

const CONTACT = {
  name: "Abhishekth Reddy Thanam",
  tagline: "AI/ML Engineer • Agentic RAG & LLMs • MLOps • Finance & Healthcare",
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
  "I'm an **AI/ML Engineer** with 3+ years delivering production-grade machine learning and agentic AI systems across healthcare and financial services. I specialize in **multi-agent orchestration with LangGraph**, RAG pipeline architecture, and domain-specific **LLM fine-tuning with LoRA/PEFT** — deployed at enterprise scale on cloud infrastructure. Recently I cut clinical prior-authorization turnaround from **3 days to under 4 hours** at UnitedHealth Group, and earlier built AML classification and real-time fraud detection systems at State Street.";

const SKILLS = [
  {
    title: "Languages & Data",
    icons: ["python", "postgresql", "apachespark", "pandas"],
    desc: "Python, SQL, and PySpark for data processing, feature pipelines, and analysis at scale.",
  },
  {
    title: "ML & Deep Learning",
    icons: ["pytorch", "scikitlearn", "huggingface"],
    desc: "PyTorch, scikit-learn, XGBoost, and BERT for modeling, prediction, and NLP.",
  },
  {
    title: "Cloud & MLOps",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", "docker", "kubernetes", "mlflow"],
    desc: "AWS, Docker, Kubernetes, MLflow, and CI/CD for deploying and monitoring models.",
  },
  {
    title: "Data & Streaming",
    icons: ["apachekafka", "apacheflink", "snowflake", "redis"],
    desc: "Kafka, Flink, Snowflake, Redis, and Feast for event-driven, real-time data systems.",
  },
];

const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "UnitedHealth Group",
    date: "Jan 2025 — Present",
    location: "USA",
    points: [
      "Designed a multi-agent prior-authorization architecture using LangGraph on AWS Bedrock (Claude 3.5 Sonnet), orchestrating planner, retriever, and reviewer agents to cut authorization turnaround from **3 days to under 4 hours** across **2M+** annual requests.",
      "Built a production RAG pipeline over **50K+** clinical policy documents with document chunking, hybrid search, and reranking via Pinecone and Amazon Titan Embeddings V2, reaching **94%** retrieval accuracy for CMS-0057-aligned coverage decisions.",
      "Built LangGraph agent nodes for parallel eligibility verification, EHR extraction, and policy-compliance checks, cutting manual clinical review workload **40%** across payer and provider workflows.",
      "Implemented LLMOps observability with RAGAS and CloudWatch to monitor retrieval precision, faithfulness, and hallucination, lifting pipeline accuracy from **78% to 91%** while reducing inference cost **35%**.",
      "Deployed containerized AI microservices on AWS ECS via Docker and GitHub Actions CI/CD, holding **99.9%** uptime and cutting inference latency **35%** with async batching and caching.",
    ],
  },
  {
    role: "ML Engineer",
    company: "State Street",
    date: "Jun 2021 — Jul 2023",
    location: "India",
    points: [
      "Developed and deployed an XGBoost AML classification model on GCP Vertex AI within the transaction-monitoring pipeline, reducing false-positive alerts **38%** and improving true-positive detection **25%**.",
      "Contributed a regression-based NAV prediction model in BigQuery ML for **500+** institutional funds, achieving **0.03%** mean absolute error and supporting a **40%** cut in manual valuation reviews.",
      "Applied BERT-based NLP to broker confirmations and loan-agent notices, automating document digitization at **92%** extraction accuracy across **10K+** daily trade documents.",
      "Built feature and ETL pipelines with Python and Apache Spark on Azure, consolidating **20+** custodian feeds into Snowflake and reducing ingestion latency from **6 hours to 45 minutes**.",
      "Automated data reconciliation with SQL and Azure Data Factory, reducing manual reconciliation effort **70%** and supporting Basel III and FATF regulatory traceability.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Clinical Documentation LLM Fine-Tuning",
    desc: "Fine-tuned Llama 3.1-8B on 50,000+ clinical notes using QLoRA (4-bit) and Hugging Face PEFT on PyTorch, with guardrails and red-teaming prompts that cut hallucination 34% and improved entity-extraction accuracy 28% on held-out benchmarks. Tracked 12 fine-tuning iterations in MLflow and shipped the quantized model as a HIPAA-compliant FastAPI endpoint — 3× faster inference while keeping 96% of full-precision accuracy.",
    tags: ["PyTorch", "QLoRA", "Hugging Face PEFT", "Llama 3.1", "MLflow", "FastAPI"],
    link: "https://github.com/Abhishekthreddy",
  },
  {
    title: "Real-Time Fraud Detection Pipeline",
    desc: "An event-driven architecture on Apache Kafka and Flink ingesting 100K+ transactions per second, feeding live-engineered features into a fraud model at a 94.2% true-positive rate with sub-100ms end-to-end latency. Real-time signals are served through a Feast feature store on Redis for microsecond lookups, with the scoring service deployed as a FastAPI REST API and SHAP explainability for regulatory audit compliance.",
    tags: ["Apache Kafka", "Apache Flink", "Feast", "Redis", "SHAP", "Grafana", "FastAPI"],
    link: "https://github.com/Abhishekthreddy",
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
              Open to AI/ML roles · USA — open to relocate
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
            subtitle="Agentic AI and ML systems across healthcare and financial services."
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
          © 2026 {CONTACT.name} — AI/ML Engineer
        </p>
      </footer>
    </main>
  );
}
