import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="gradient-text">connect</span></>}
      subtitle="Open to internships, freelance, and collaboration opportunities."
    >
      <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hanisam@gmail.com", href: "mailto:hanisam@gmail.com" },
            { icon: Github, label: "GitHub", value: "Haniya220", href: "https://github.com/Haniya220" },
            { icon: MapPin, label: "Location", value: "Tumkur, Karnataka" },
          ].map((item) => {
            const Comp: any = item.href ? "a" : "div";
            return (
              <Comp
                key={item.label}
                {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground group-hover:glow-purple transition">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </Comp>
            );
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="md:col-span-3 glass-strong rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" type="text" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@example.com" />
          </div>
          <Field label="Subject" type="text" placeholder="Internship Opportunity" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project or opportunity..."
              className="mt-1.5 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] py-3 text-sm font-medium text-primary-foreground glow-purple hover:scale-[1.01] transition"
          >
            <Send size={16} /> {sent ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        {...rest}
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition"
      />
    </div>
  );
}
