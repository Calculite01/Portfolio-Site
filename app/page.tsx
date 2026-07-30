import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Resume />
      <Contact />
      <ChatWidget />
    </main>
  );
}
