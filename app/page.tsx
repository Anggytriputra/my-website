import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { Chatbox } from "@/components/portfolio/chatbox";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />

      {/* Floating Chatbox */}
      <Chatbox />
    </main>
  );
}
