
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-amber-100 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Banner Image */}
          <div className="animate-fade-in">
            <div className="aspect-square bg-white rounded-2xl shadow-md border border-neutral-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="font-inter text-gray-600 text-sm">
                  Upload your official camp banner<br />
                  (eagle + trumpet + violins + golden gate)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-slide-in">
              <h1 className="font-encode text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
                S.E.R. Gospel Worker
                <br />
                <span className="text-amber-600">Summer Camp 2025</span>
              </h1>
            </div>
            
            <div className="animate-blur-in">
              <p className="font-inter text-lg sm:text-xl text-gray-600 leading-relaxed">
                Charlotte, North Carolina | July 6–9, 2025
              </p>
            </div>

            <div className="animate-blur-in">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-inter font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 text-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
