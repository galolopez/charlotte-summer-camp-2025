import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ClaudeChat from '@/components/ClaudeChat';
import ItinerarySection from '../components/ItinerarySection';
import PlaceholderSections from '../components/PlaceholderSections';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ClaudeChat />
        <ItinerarySection />
        <PlaceholderSections />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
