import ComingSoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <Hero />
      <div className="md:px-40 px-10">
        <Resume />
        <Projects />
        <ComingSoon />
      </div>
    </main>
  );
}
