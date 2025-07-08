import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useInView } from '../hooks/use-in-view';
import GoogleFormEmbed from '../components/GoogleFormEmbed';

const NewSongFestival = () => {
  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const [sittingRef, sittingInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const [qrRef, qrInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

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
                  transition: 'all 1.5s ease-out'
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
              <div 
                ref={sittingRef}
                className={`transition-all duration-700 ease-out ${
                  sittingInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <img 
                  src="/new-song-festival-sitting.png" 
                  alt="Sitting Arrangements" 
                  className="mx-auto max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Vote for your favorite team!
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Please vote only once to decide the winner of this New Song Festival!
            </p>
            
            <div 
              ref={qrRef}
              className={`mb-8 transition-all duration-700 ease-out ${
                qrInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <img 
                src="/new-song-festival-qr.png" 
                alt="QR Code for New Song Festival Voting" 
                className="mx-auto max-w-xs h-auto rounded-lg shadow-md"
              />
            </div>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCdG-lfm_nGy8dA_y56VONyg_wDjLhuVXM2faoFon8U9q-GA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-6 px-12 rounded-xl text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              VOTE HERE!
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewSongFestival; 