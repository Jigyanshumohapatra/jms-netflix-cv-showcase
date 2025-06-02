
import { useState, useEffect } from 'react';
import NetflixSplash from '@/components/NetflixSplash';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <NetflixSplash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <Navigation />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="relative">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        
        <section id="experience" className="py-20">
          <ExperienceSection />
        </section>
        
        <section id="skills" className="py-20">
          <SkillsSection />
        </section>
        
        <section id="certifications" className="py-20">
          <CertificationsSection />
        </section>
        
        <section id="testimonials" className="py-20">
          <TestimonialsSection />
        </section>
        
        <section id="education" className="py-20">
          <EducationSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
