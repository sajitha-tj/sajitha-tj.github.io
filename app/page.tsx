import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <Hero />
      <div className="md:px-40 px-4">
        <About />
        <Resume />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
