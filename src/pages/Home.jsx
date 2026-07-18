import Hero from "../components/Hero";
import About from "../components/About";
import VisiMisi from "../components/VisiMisi";
import Culture from "../components/Culture";
import ActivityPreview from "../components/ActivityPreview";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-pattern-grid">
        <About />
        <VisiMisi />
        <Culture />
      </div>
      <ActivityPreview />
      <Contact />
    </>
  );
}
