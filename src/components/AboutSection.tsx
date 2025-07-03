
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-camp" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Welcome to the 2025 Charlotte Camp!
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p className="font-inter text-gray-900 leading-relaxed text-center">
            We’re excited to welcome you here in Charlotte and look forward to serving you with Heavenly Mother's warm and caring love!
            <br /><br />
            Just like an eagle that soars majestically through the sky with sharp, keen eyesight, let us Follow our God and move forward as the Heavenly Army blowing the trumpets with 20/20 vision for the Gospel!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
