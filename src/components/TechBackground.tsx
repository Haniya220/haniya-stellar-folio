import { useMemo } from "react";

const SNIPPETS = [
  "const dev = 'Haniya';",
  "function build() {}",
  "<Portfolio />",
  "git commit -m 'ship'",
  "npm run dev",
  "{ skill: 'React' }",
  "while(coding) { learn(); }",
  "SELECT * FROM dreams;",
  "console.log('hi');",
  "export default Hero;",
  "0xDEADBEEF",
  "if (idea) build();",
  "useEffect(() => {})",
  "return <Future/>",
];

export function TechBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${(i * 7.3) % 100}%`,
        delay: `${(i * 1.7) % 18}s`,
        duration: `${18 + ((i * 3) % 14)}s`,
        text: SNIPPETS[i % SNIPPETS.length],
        size: 10 + (i % 3) * 2,
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* animated grid */}
      <div className="absolute inset-0 tech-grid" />
      {/* scan beam */}
      <div className="absolute inset-0 tech-scan" />
      {/* floating code snippets */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 font-mono text-accent/60 whitespace-nowrap animate-drift-up"
          style={{
            left: p.left,
            fontSize: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.text}
        </span>
      ))}
      {/* corner glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
    </div>
  );
}
