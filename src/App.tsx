import { useEffect, useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CredentialsSection from './sections/CredentialsSection';
import ContactSection from './sections/ContactSection';
import EducationPage from './pages/EducationPage';

// Hash routing keeps the site working on GitHub Pages without server rewrites.
const isEducation = () => window.location.hash === '#/education';

export default function App() {
  const [onEducation, setOnEducation] = useState(isEducation);

  useEffect(() => {
    const onHash = () => {
      const next = isEducation();
      setOnEducation(next);
      if (next) {
        window.scrollTo(0, 0);
        return;
      }
      // Returning to the portfolio: after it renders, jump to the requested section (or top).
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = id && !id.startsWith('/') ? document.getElementById(id) : null;
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.title = onEducation
      ? 'Education | Rithwik Kandakatla'
      : 'Rithwik Kandakatla | AI Engineer & Software Development Engineer';
  }, [onEducation]);

  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }} className="font-kanit">
      {onEducation ? (
        <EducationPage />
      ) : (
        <>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ExperienceSection />
          <CredentialsSection />
          <ContactSection />
        </>
      )}
    </main>
  );
}
