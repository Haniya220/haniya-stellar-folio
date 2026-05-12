import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, MessageSquare, Code2, Braces, Database, Terminal, Cpu, GitBranch } from "lucide-react";
import haniya from "@/assets/haniya.jpeg";
import { TechBackground } from "./TechBackground";

const titles = [
  "BCA Student",
  "Aspiring Software Developer",
  "Frontend Web Developer",
  "Creative Problem Solver",
];

const orbitIcons = [
  { Icon: Code2, r: 170, d: 18 },
  { Icon: Braces, r: 170, d: 18 },
  { Icon: Database, r: 210, d: 26 },
  { Icon: Terminal, r: 210, d: 26 },
  { Icon: Cpu, r: 250, d: 34 },
  { Icon: GitBranch, r: 250, d: 34 },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % titles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      <TechBackground />

      <div className="relative mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for internships
        </motion.span>

        {/* Centered photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-8 flex items-center justify-center"
        >
          {/* orbiting tech icons */}
          <div className="absolute inset-0 hidden sm:block" style={{ width: 0, height: 0 }}>
            {orbitIcons.map(({ Icon, r, d }, idx) => (
              <span
                key={idx}
                className="absolute left-0 top-0 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl glass-strong text-accent animate-orbit"
                style={{
                  // @ts-expect-error css var
                  "--r": `${r}px`,
                  animationDuration: `${d}s`,
                  animationDelay: `${idx * -3}s`,
                  animationDirection: idx % 2 ? "reverse" : "normal",
                }}
              >
                <Icon size={16} />
              </span>
            ))}
          </div>

          {/* pulse rings */}
          <span className="absolute h-72 w-72 md:h-80 md:w-80 rounded-full border border-accent/30 animate-pulse-ring" />
          <span className="absolute h-72 w-72 md:h-80 md:w-80 rounded-full border border-primary/30 animate-pulse-ring" style={{ animationDelay: "1.2s" }} />

          <div className="relative animate-float">
            <div className="absolute -inset-5 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#6366f1,#f9a8d4,#a78bfa,#8b5cf6)] blur-2xl opacity-60 animate-glow-rotate" />
            <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#a78bfa,#818cf8,#fbcfe8,#a78bfa)] animate-glow-rotate" />
            <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full p-1 bg-background">
              <div className="h-full w-full rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src={haniya}
                  alt="Haniya — BCA student and aspiring software developer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 font-display text-5xl md:text-7xl font-bold leading-[1.05]"
        >
          Hi, I'm <span className="gradient-text">HANIYA</span>
        </motion.h1>

        <div className="mt-4 h-9 overflow-hidden">
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-accent font-medium"
          >
            {titles[i]}
          </motion.div>
        </div>

        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Motivated and detail-oriented BCA student passionate about software development,
          modern web technologies, and creating user-friendly digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground glow-purple transition hover:scale-[1.03]"
          >
            View Portfolio <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="/Haniya-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-accent/40 px-5 py-3 text-sm font-medium text-accent hover:bg-accent/10 transition"
          >
            <MessageSquare size={16} /> Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Haniya220", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hanisam@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-xl glass hover:bg-accent/15 hover:text-accent transition hover-scale"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
