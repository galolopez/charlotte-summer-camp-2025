import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useInView } from '../hooks/use-in-view';

const NewSongFestival = () => {
  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <div className="min-h-screen flex flex-col bg-[#142a3a]">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Banner Section */}
        <section className="min-h-screen bg-[#142a3a] flex items-center justify-center relative overflow-hidden">
          <div className="w-full">
            <div className="flex justify-center items-start pt-0 pb-0 sm:pt-0 sm:pb-8 lg:pt-0 lg:pb-16">
              <div 
                ref={heroRef}
                className={`w-full max-w-none sm:max-w-3xl lg:max-w-7xl px-0 sm:px-4 lg:px-8 ${
                  heroInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transform: heroInView 
                    ? 'translateY(-6rem)' 
                    : 'translateY(-6rem) translateY(1rem)',
                  opacity: heroInView ? 1 : 0,
                  transition: 'all 1s ease-out'
                }}
              >
                <img 
                  src="/new-song-festival.png" 
                  alt="New Song Festival" 
                  className="w-full h-auto object-contain mx-auto scale-150 sm:scale-100"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Sitting Arrangements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
                Sitting Arrangements
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-12"></div>
              <img 
                src="/new-song-festival-sitting.png" 
                alt="Sitting Arrangements" 
                className="mx-auto max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewSongFestival; 