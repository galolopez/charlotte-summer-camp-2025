
import React from 'react';

const PlaceholderSections = () => {
  const sections = [
    { id: 'lodging', title: 'Lodging', description: 'Information about accommodations and housing arrangements.' },
    { id: 'fragrance', title: 'Fragrance', description: 'Details about the fragrance program and activities.' },
    { id: 'new-song-festival', title: 'New Song Festival', description: 'Information about the musical celebrations and performances.' },
    { id: 'media', title: 'Media', description: 'Photos, videos, and other media from the camp.' },
    { id: 'about', title: 'About', description: 'More information about our organization and mission.' },
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
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                {section.description}
              </p>
              <div className="mt-12 p-12 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
                <p className="font-inter text-gray-500">
                  Content coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PlaceholderSections;
