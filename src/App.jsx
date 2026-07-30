import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import FloatingElements from './components/FloatingElements/FloatingElements';

function App() {
  return (
    <>
      <BackgroundVideo />
      
      <FloatingElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
