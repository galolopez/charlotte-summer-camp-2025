import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ItinerarySection from '../components/ItinerarySection';
import PlaceholderSections from '../components/PlaceholderSections';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ItinerarySection />
        <PlaceholderSections />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
