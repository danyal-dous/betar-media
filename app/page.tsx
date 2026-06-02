import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <HowItWorks />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
