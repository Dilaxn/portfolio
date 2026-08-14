"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

type ContactStatus = "idle" | "sending" | "sent" | "error";

const PROJECTS = [
  {
    name: "Lanka News",
    eyebrow: "News intelligence",
    url: "https://lankanews.click",
    description:
      "A multilingual news experience that brings Sri Lanka’s major publishers into one fast, focused feed.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    tone: "cobalt",
    mark: "LN",
  },
  {
    name: "InviteBloom",
    eyebrow: "Digital celebrations",
    url: "https://invitebloom.online",
    description:
      "Elegant wedding invitations with thoughtful RSVP flows, guest management, and beautiful templates.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    tone: "blush",
    mark: "IB",
  },
  {
    name: "TimeBox",
    eyebrow: "Intentional productivity",
    url: "https://timebox.dilax.space",
    description:
      "A calm daily planner inspired by timeboxing—built to turn ambitious plans into focused blocks of work.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    tone: "amber",
    mark: "TB",
  },
  {
    name: "WebPulse",
    eyebrow: "Always-on monitoring",
    url: "https://webpulse.dilax.space",
    description:
      "Clear uptime and performance monitoring that surfaces response times, incidents, and service health.",
    tags: ["Next.js", "TypeScript", "Redis"],
    tone: "mint",
    mark: "WP",
  },
  {
    name: "Prince",
    eyebrow: "Project clarity",
    url: "https://prince.dilax.space",
    description:
      "Lightweight planning for teams who want capable kanban boards without the weight of enterprise software.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    tone: "violet",
    mark: "PR",
  },
  {
    name: "PMS",
    eyebrow: "Property operations",
    url: "https://pms.dilax.space",
    description:
      "A practical workspace for leases, tenants, maintenance requests, and the details that keep properties moving.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    tone: "sky",
    mark: "PM",
  },
];

const STACK = [
  "Java 21",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Kubernetes",
  "AWS",
  "TypeScript",
  "Next.js",
  "Prometheus",
  "Grafana",
  "Docker",
];

function useReveal(threshold = 0.14) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={close} aria-label="Dilakshan M. — home">
          <span className="wordmark-dot">D</span>
          <span>Dilakshan M.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
        </button>

        <div id="site-menu" className={`nav-links ${open ? "is-open" : ""}`}>
          <a href="#about" onClick={close}>About</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-cta" href="https://www.linkedin.com/in/dilaxn/" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <main>
      <section id="top" className="hero">
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />

        <div className="hero-inner">
          <div className="availability-pill">
            <span className="availability-dot" />
            Building reliable products from Colombo
          </div>

          <h1>
            I engineer the invisible systems
            <span> people trust.</span>
          </h1>

          <p className="hero-copy">
            I’m Dilakshan, a software engineer turning complex financial and product systems into fast,
            resilient experiences that feel beautifully simple.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Start a conversation
            </a>
          </div>

          <div className="hero-object" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="signal-card signal-card-one">
              <span>Latency</span>
              <strong>−42%</strong>
            </div>
            <div className="signal-card signal-card-two">
              <span>Service</span>
              <strong>Healthy</strong>
            </div>
            <div className="core-mark">
              <span>DM</span>
              <small>ENGINEERING</small>
            </div>
          </div>

          <div className="hero-facts" aria-label="Career highlights">
            <div>
              <strong>4+</strong>
              <span>Years building production software</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Industries: fintech, aviation, AI/ML</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Core technologies in daily rotation</span>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Work />
      <OpenSource />
      <Contact />
    </main>
  );
}

function About() {
  const ref = useReveal();

  return (
    <section id="about" className="about reveal-section" ref={ref}>
      <div className="section-shell">
        <div className="section-kicker light-kicker">
          <span>01</span>
          <p>How I think</p>
        </div>

        <div className="about-intro">
          <h2>Calm on the surface. Serious engineering underneath.</h2>
          <p>
            The best software makes difficult things feel obvious. I combine backend depth with product
            judgment to build systems that are dependable, understandable, and ready to grow.
          </p>
        </div>

        <div className="principles-grid">
          <article>
            <span className="principle-number">01</span>
            <h3>Design for trust</h3>
            <p>Predictable behavior, thoughtful failure modes, and observability that makes the system legible.</p>
          </article>
          <article>
            <span className="principle-number">02</span>
            <h3>Build for change</h3>
            <p>Clean boundaries and maintainable code that let teams move quickly without creating tomorrow’s drag.</p>
          </article>
          <article>
            <span className="principle-number">03</span>
            <h3>Measure what matters</h3>
            <p>Performance, resilience, and real user outcomes—not complexity for complexity’s sake.</p>
          </article>
        </div>

        <div className="stack-cloud" aria-label="Technology stack">
          {STACK.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className={`project-visual tone-${project.tone}`} aria-hidden="true">
      <div className="mini-browser">
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-body">
          <div className="project-mark">{project.mark}</div>
          <div className="mock-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="mock-panels">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const ref = useReveal(0.04);

  return (
    <section id="work" className="work reveal-section" ref={ref}>
      <div className="section-shell">
        <div className="section-kicker">
          <span>02</span>
          <p>Selected work</p>
        </div>

        <div className="work-heading">
          <h2>Products made to be used, not just admired.</h2>
          <p>Six independent products, each shaped around a real problem and built end to end.</p>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <a
              key={project.name}
              className={`project-card ${index === 0 ? "project-featured" : ""}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} project`}
            >
              <ProjectVisual project={project} />
              <div className="project-copy">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  const ref = useReveal();

  return (
    <section className="open-source reveal-section" ref={ref}>
      <div className="open-source-grid" aria-hidden="true">
        {Array.from({ length: 70 }, (_, index) => <span key={index} className={index % 7 === 0 || index % 11 === 0 ? "active" : ""} />)}
      </div>
      <div className="section-shell open-source-content">
        <p className="mono-label">GITHUB / DILAXN</p>
        <h2>Curious by default.<br />Building in the open.</h2>
        <p>
          Side projects are where I test ideas, learn new tools, and turn “what if?” into working software.
        </p>
        <a className="button button-light" href="https://github.com/Dilaxn" target="_blank" rel="noreferrer">
          Visit my GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }, []);

  return (
    <section id="contact" className="contact reveal-section" ref={ref}>
      <div className="section-shell">
        <div className="contact-panel">
          <div className="contact-intro">
            <p className="mono-label">HAVE A GOOD PROBLEM?</p>
            <h2>Let’s build something that matters.</h2>
            <p>
              I’m always open to thoughtful conversations about software, systems, and ambitious product ideas.
            </p>
            <div className="contact-links">
              <a href="mailto:dilaxn@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/dilaxn/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Dilaxn" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
            </label>
            <label>
              <span>What are you thinking about?</span>
              <textarea name="message" rows={4} placeholder="Tell me a little about your idea…" required />
            </label>
            <button className="form-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : status === "error" ? "Try again" : "Send message"}
              <span aria-hidden="true">→</span>
            </button>
            <p className="form-status" aria-live="polite">
              {status === "sent" ? "Thanks — I’ll get back to you soon." : status === "error" ? "Something went wrong. You can email me directly instead." : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <strong>Dilakshan M.</strong>
          <span>Software Engineer</span>
        </div>
        <p>Designed with care. Engineered for speed.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  );
}
