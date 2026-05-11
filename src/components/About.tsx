import { motion } from "framer-motion";
import { Code2, Zap, Lightbulb, Globe2, Users } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Code2, title: "Programming Fundamentals", desc: "Solid grasp of OOP, data structures, and clean coding principles." },
  { icon: Zap, title: "Quick Learner", desc: "Pick up new frameworks and tools rapidly with curiosity-driven practice." },
  { icon: Lightbulb, title: "Problem-Solving Mindset", desc: "Approach challenges analytically, breaking them into elegant solutions." },
  { icon: Globe2, title: "Web Development Passion", desc: "Love crafting responsive, accessible, and beautiful user interfaces." },
  { icon: Users, title: "Team Collaboration", desc: "Communicate clearly and contribute productively in team environments." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>A bit <span className="gradient-text">about me</span></>}
      subtitle="Driven by curiosity, sharpened by practice."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {traits.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass rounded-2xl p-6 hover:border-accent/40 hover:bg-white/[0.06] transition"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground glow-purple">
              <t.icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
