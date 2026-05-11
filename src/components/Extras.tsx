import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const soft = ["Communication", "Teamwork", "Adaptability", "Problem Solving", "Quick Learning", "Leadership"];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Recognized <span className="gradient-text">credentials</span></>}
    >
      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-accent/40 transition"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground glow-purple">
            <Award size={22} />
          </div>
          <div>
            <h3 className="font-semibold">Warehouse Associate</h3>
            <p className="text-sm text-muted-foreground mt-1">Atos Prayas Foundation</p>
            <span className="mt-3 inline-block text-xs rounded-full border border-accent/40 text-accent px-3 py-1">
              Certified
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export function SoftSkills() {
  return (
    <Section
      id="soft-skills"
      eyebrow="Soft Skills"
      title={<>Beyond the <span className="gradient-text">code</span></>}
    >
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {soft.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-full glass px-5 py-2.5 text-sm hover:bg-accent/15 hover:text-accent hover:border-accent/40 transition cursor-default hover-scale"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
