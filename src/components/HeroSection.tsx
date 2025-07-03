import React from 'react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-camp');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-amber-100 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Banner Image (hidden on mobile) */}
          <div className="animate-fade-in lg:mt-0 lg:mb-0">
            <div className="aspect-square bg-white rounded-2xl shadow-md border border-neutral-200 overflow-hidden">
              <img 
                src="/SERSummerCamp.jpg" 
                alt="S.E.R. Gospel Worker Summer Camp 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content (full width on mobile) */}
          <div className="animate-fade-in lg:col-start-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              S.E.R. Gospel Worker<br />
              <span className="text-amber-600">Summer Camp 2025</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center lg:text-left">
              Charlotte, North Carolina<br />July 6–9, 2025
            </p>
            <div className="flex justify-center">
              <button 
                onClick={scrollToAbout}
                className="px-10 py-4 sm:px-12 sm:py-5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-h-[56px] sm:min-h-[64px]"
              >
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
