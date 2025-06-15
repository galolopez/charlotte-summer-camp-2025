
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-camp" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            About the Camp
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p className="font-inter text-gray-600 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
