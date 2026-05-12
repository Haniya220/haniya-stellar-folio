import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, MessageSquare } from "lucide-react";
import haniya from "@/assets/haniya.jpeg";

const titles = [
  "BCA Student",
  "Aspiring Software Developer",
  "Frontend Web Developer",
  "Creative Problem Solver",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % titles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">HANIYA</span>
          </h1>

          <div className="mt-4 h-9 overflow-hidden">
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
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

          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-8 flex items-center gap-4">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#6366f1,#f9a8d4,#a78bfa,#8b5cf6)] blur-2xl opacity-60 animate-glow-rotate" />
            <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#a78bfa,#818cf8,#fbcfe8,#a78bfa)] animate-glow-rotate" />
            <div className="relative h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full p-1 bg-background">
              <div className="h-full w-full rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src={haniya}
                  alt="Haniya — BCA student and aspiring software developer"
                  className="h-full w-full object-cover object-top scale-110"
                />
              </div>
            </div>
            <div className="absolute -right-4 top-10 glass rounded-xl px-3 py-2 text-xs">
              <span className="text-accent">●</span> Coding
            </div>
            <div className="absolute -left-6 bottom-12 glass rounded-xl px-3 py-2 text-xs">
              <span className="gradient-text font-semibold">CGPA 7.9</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
