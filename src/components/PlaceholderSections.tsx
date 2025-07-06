import React from 'react';

const PlaceholderSections = () => {
  const sections = [
    { id: 'lodging', title: 'Lodging', description: '' },
  ];

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
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
              
              {/* Brothers Lodging */}
              <div className="mb-12">
                <h3 className="font-encode text-2xl font-semibold text-gray-900 mb-6">
                  Brothers Lodging
                </h3>
                <div className="bg-gray-100 rounded-2xl">
                  <img src="/brothers-lodging.png" alt="Brothers Lodging Room Assignments" className="w-full h-auto rounded-lg border border-gray-300 shadow" />
                </div>
              </div>

              {/* Sisters Lodging */}
              <div>
                <h3 className="font-encode text-2xl font-semibold text-gray-900 mb-6">
                  Sisters Lodging
                </h3>
                <div className="bg-gray-100 rounded-2xl">
                  <img src="/sisters-lodging.png" alt="Sisters Lodging Room Assignments" className="w-full h-auto rounded-lg border border-gray-300 shadow" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PlaceholderSections;
