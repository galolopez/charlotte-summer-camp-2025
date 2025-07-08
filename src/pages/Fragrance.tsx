import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Fragrance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {/* Hero Image Section */}
        <section className="w-full">
          <img 
            src="/fragrance.png" 
            alt="Fragrance" 
            className="w-full h-auto object-cover"
            style={{ maxHeight: '60vh' }}
          />
        </section>
        
        {/* Message Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-inter text-lg text-blue-800 leading-relaxed mb-8">
                Thanks to Father and Mother for this amazing event. Many realizations come to mind when brothers and sisters gather in unity. If you feel moved like we are, please leave a fragrance by clicking the link below!
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf7XXNQPkotlXtLgHI9Oh6zPm22Y2556odKMPQDI-f3jongxg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Write a Fragrance
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fragrance;
