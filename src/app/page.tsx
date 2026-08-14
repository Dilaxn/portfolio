"use client";

import { useEffect, useRef, useState, FormEvent, useCallback } from "react";

/* ───────────────────────── useInView hook ───────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child) =>
            child.classList.add("visible")
          );
          if (el.classList.contains("reveal")) el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

/* ───────────────────────── Data ───────────────────────── */

const TECH_STACK = [
  "Java", "Spring Boot", "PostgreSQL", "Redis", "Kubernetes", "Kafka",
  "Docker", "TypeScript", "Next.js", "AWS", "Prometheus", "Grafana",
];

const PROJECTS = [
  {
    name: "Lanka News",
    url: "https://lankanews.click",
    description: "Multilingual Sri Lankan news aggregator — curates and organizes news from major outlets in real time.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "InviteBloom",
    url: "https://invitebloom.online",
    description: "Elegant digital wedding invitation platform with RSVP tracking, guest management, and beautiful templates.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "TimeBox",
    url: "https://timebox.dilax.space",
    description: "Productivity app based on the Harvard Time Boxing method — plan, track, and optimize your daily schedule.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "WebPulse",
    url: "https://webpulse.dilax.space",
    description: "Uptime and performance monitoring tool — tracks response times, status codes, and sends alerts on downtime.",
    tags: ["Next.js", "TypeScript", "Redis"],
  },
  {
    name: "Prince",
    url: "https://prince.dilax.space",
    description: "Lightweight project management tool with kanban boards, task tracking, and team collaboration features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "PMS",
    url: "https://pms.dilax.space",
    description: "Property management system for landlords — tenant tracking, lease management, and maintenance requests.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dilaxn/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    url: "https://github.com/Dilaxn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Email",
    url: "mailto:dilaxn@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

/* ───────────────────────── Nav ───────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur bg-[#050510]/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          D<span className="text-indigo-400">.</span>M
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-white/60">
          {["About", "Projects", "GitHub", "Contact"].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
              {s}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section id="hero" className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] glow-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[100px] glow-orb" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-indigo-400 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Software Engineer
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]">
          Dilakshan
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            M.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
          Building high-performance financial systems. Crafting clean, mission-critical software that scales.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#projects" className="px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
            View Work
          </a>
          <a href="#contact" className="px-7 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── About ───────────────────────── */

function About() {
  const ref = useInView();
  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <p className="reveal text-indigo-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">About</p>
        <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight mb-10">
          Turning complexity<br />into clarity.
        </h2>
        <p className="reveal text-white/50 text-lg leading-relaxed max-w-3xl">
          Backend-focused Software Engineer with 4+ years building and optimizing high-performance, mission-critical financial systems across fintech, aviation, and AI/ML platforms. Strong fluency in Java (SE/JEE, 17/21) and the Spring Framework, with hands-on delivery of microservices for transaction monitoring, fraud detection, risk, and KYC/compliance domains. Practitioner of clean, maintainable code shipped fast through TDD, DDD, and continuous integration and delivery. Deep experience with PostgreSQL, Redis, Kubernetes, Kafka, and observability stacks (Prometheus, Grafana), delivering scalable, event-driven architectures in fast-paced Agile teams.
        </p>
        <div className="mt-14 stagger flex flex-wrap gap-3">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="reveal px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/70 hover:border-indigo-400/40 hover:text-indigo-300 transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Projects ───────────────────────── */

function Projects() {
  const ref = useInView(0.05);
  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="reveal text-indigo-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Projects</p>
        <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight mb-16">
          Things I&apos;ve built.
        </h2>
        <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              className="reveal project-card group block rounded-2xl bg-white/[0.03] border border-white/[0.06] p-7 hover:border-indigo-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-indigo-300 transition-colors">{p.name}</h3>
                <svg className="w-4 h-4 text-white/30 group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300/70">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GitHub ───────────────────────── */

function GitHubSection() {
  const ref = useInView();
  return (
    <section id="github" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal">
          <svg className="w-12 h-12 mx-auto mb-6 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </div>
        <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight mb-6">Open Source & GitHub</h2>
        <p className="reveal text-white/50 text-lg mb-10 max-w-lg mx-auto">
          I build in the open. Check out my repositories, contributions, and side projects.
        </p>
        <div className="reveal">
          <a href="https://github.com/Dilaxn" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  const ref = useInView();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }, []);

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="reveal text-indigo-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Contact</p>
            <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight mb-6">Let&apos;s talk.</h2>
            <p className="reveal text-white/50 text-lg mb-10">
              Have a project in mind or just want to connect? Reach out through any of these channels.
            </p>
            <div className="stagger flex flex-col gap-4">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target={s.url.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="reveal group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300">
                  <span className="p-2.5 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors">{s.icon}</span>
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="reveal">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input name="name" required placeholder="Name"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 transition-colors hover:border-white/20" />
              <input name="email" type="email" required placeholder="Email"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 transition-colors hover:border-white/20" />
              <textarea name="message" required rows={5} placeholder="Message"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 transition-colors hover:border-white/20 resize-none" />
              <button type="submit" disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-indigo-600 text-sm font-medium hover:bg-indigo-500 transition-all duration-300 disabled:opacity-50 hover:scale-[1.01]">
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : status === "error" ? "Failed — try again" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <span>&copy; {new Date().getFullYear()} Dilakshan M.</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <GitHubSection />
      <Contact />
      <Footer />
    </>
  );
}
