import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Featured <span className="gradient-text">work</span></>}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-xs">
              <Sparkles size={12} /> Featured Project
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Programming HelpDesk</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Developed an educational platform providing categorized programming notes, syntax
              references, and learning support with responsive design and structured navigation.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
              {["Responsive design", "Clean UI", "Organized navigation", "Beginner-friendly"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript"].map((t) => (
                <span key={t} className="rounded-md border border-border bg-white/5 px-2.5 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://haniya220.github.io/ProgrammingHelpDesk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-primary-foreground glow-purple hover:scale-[1.03] transition"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href="https://github.com/Haniya220/ProgrammingHelpDesk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative rounded-2xl glass p-3 hover-scale">
              <div className="rounded-xl overflow-hidden border border-border bg-gradient-to-br from-primary/30 to-accent/20 aspect-[4/3] grid place-items-center font-mono text-sm">
                <div className="space-y-1 px-6 text-left text-muted-foreground">
                  <div><span className="text-accent">const</span> learn = () =&gt; {"{"}</div>
                  <div className="pl-4">notes.<span className="text-primary-foreground">organized</span>;</div>
                  <div className="pl-4">syntax.<span className="text-primary-foreground">referenced</span>;</div>
                  <div className="pl-4"><span className="text-accent">return</span> growth;</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
