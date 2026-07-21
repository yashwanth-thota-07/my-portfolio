import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackToTop from './components/BackToTop/BackToTop';
import MouseFollower from './components/MouseFollower/MouseFollower';
import FloatingElements from './components/FloatingElements/FloatingElements';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      {!loading && (
        <>
          <ScrollProgress />
          <MouseFollower />
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
      )}
    </>
  );
}

export default App;
