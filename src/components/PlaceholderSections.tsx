import React from 'react';
import { useInView } from '../hooks/use-in-view';

const PlaceholderSections = () => {
  const sections = [
    { id: 'lodging', title: 'Lodging', description: '' },
  ];

  // Add wow effect hooks for both sections
  const [brothersRef, brothersInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const [sistersRef, sistersInView] = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                {section.title}
              </h2>
              <div className="mb-8">
                <div className="font-encode text-xl text-gray-800 text-center leading-tight">
                  <span className="font-bold">Hotel: Holiday Inn</span><br /><br />
                  250 Beatty Dr.<br />
                  Belmont, NC 28012
                </div>
              </div>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
              
              {/* Brothers Lodging */}
              <div ref={brothersRef} className={`bg-gray-100 rounded-2xl mb-12 transition-opacity duration-1000 ${brothersInView ? 'animate-fade-in' : 'opacity-0'}`}>
                <h3 className="font-encode text-2xl font-semibold text-gray-900 mb-6">
                  Brothers Lodging
                </h3>
                <img src="/brothers-lodging.png" alt="Brothers Lodging Room Assignments" className="w-full h-auto rounded-lg border border-gray-300 shadow" />
              </div>

              {/* Sisters Lodging */}
              <div ref={sistersRef} className={`bg-gray-100 rounded-2xl transition-opacity duration-1000 ${sistersInView ? 'animate-fade-in' : 'opacity-0'}`}>
                <h3 className="font-encode text-2xl font-semibold text-gray-900 mb-6">
                  Sisters Lodging
                </h3>
                <img src="/sisters-lodging.png" alt="Sisters Lodging Room Assignments" className="w-full h-auto rounded-lg border border-gray-300 shadow" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PlaceholderSections;
