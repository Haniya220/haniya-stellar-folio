import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  { degree: "BCA — Bachelor of Computer Applications", school: "Varadaraja Degree College, Tumkur", score: "CGPA 7.9", year: "Pursuing" },
  { degree: "Pre-University (PUC)", school: "Empress Girls Govt College", score: "69%", year: "Completed" },
  { degree: "SSLC — Secondary School", school: "Empress Girls High School", score: "75%", year: "Completed" },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="gradient-text">journey</span></>}
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.degree}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"} pl-12 md:pl-0`}
          >
            <div className={`absolute top-4 ${i % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"} left-2 md:left-auto h-5 w-5 rounded-full bg-[image:var(--gradient-primary)] glow-purple ring-4 ring-background`} />
            <div className="glass rounded-2xl p-6 hover:border-accent/40 transition">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs text-accent uppercase tracking-wider">{it.year}</span>
                <span className="rounded-full bg-primary/15 text-primary-foreground/90 text-xs px-3 py-1 border border-primary/30">
                  {it.score}
                </span>
              </div>
              <h3 className="mt-2 font-semibold flex items-center gap-2">
                <GraduationCap size={18} className="text-accent" /> {it.degree}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{it.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
