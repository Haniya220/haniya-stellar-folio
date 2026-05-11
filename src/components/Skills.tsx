import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Globe, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 78 },
      { name: "Python", level: 82 },
      { name: "R", level: 65 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [{ name: "MySQL", level: 78 }],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "MS Excel", level: 75 },
      { name: "MS Word", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools of the <span className="gradient-text">trade</span></>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 hover:glow-cyan hover:border-accent/40 transition"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <g.icon size={18} />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
