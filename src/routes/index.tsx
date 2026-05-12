import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications, SoftSkills } from "@/components/Extras";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haniya — BCA Student & Aspiring Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Haniya, a BCA student and aspiring software developer specializing in modern web technologies and user-friendly digital experiences.",
      },
      { property: "og:title", content: "Haniya — BCA Student & Aspiring Software Developer" },
      {
        property: "og:description",
        content: "Explore Haniya's portfolio: projects, skills, education, and contact.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-tech text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <SoftSkills />
      <Contact />
      <Footer />
    </main>
  );
}
