
import React from 'react';

const ItinerarySection = () => {
  const itineraryData = [
    { date: 'July 6', morning: 'TBD', afternoon: 'TBD', evening: 'TBD' },
    { date: 'July 7', morning: 'TBD', afternoon: 'TBD', evening: 'TBD' },
    { date: 'July 8', morning: 'TBD', afternoon: 'TBD', evening: 'TBD' },
    { date: 'July 9', morning: 'TBD', afternoon: 'TBD', evening: 'TBD' },
  ];

  return (
    <section id="itinerary" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Camp Itinerary
          </h2>
          <p className="font-inter text-xl text-amber-600 font-medium">
            July 6–9, 2025
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-neutral-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-amber-50">
                <tr>
                  <th className="px-6 py-4 text-left font-encode font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left font-encode font-semibold text-gray-900">Morning</th>
                  <th className="px-6 py-4 text-left font-encode font-semibold text-gray-900">Afternoon</th>
                  <th className="px-6 py-4 text-left font-encode font-semibold text-gray-900">Evening</th>
                </tr>
              </thead>
              <tbody>
                {itineraryData.map((day, index) => (
                  <tr key={day.date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-inter font-medium text-gray-900">{day.date}</td>
                    <td className="px-6 py-4 font-inter text-gray-600">{day.morning}</td>
                    <td className="px-6 py-4 font-inter text-gray-600">{day.afternoon}</td>
                    <td className="px-6 py-4 font-inter text-gray-600">{day.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            {itineraryData.map((day) => (
              <div key={day.date} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-encode font-semibold text-gray-900 mb-3">{day.date}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-600">Morning:</span>
                    <span className="font-inter text-sm text-gray-900">{day.morning}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-600">Afternoon:</span>
                    <span className="font-inter text-sm text-gray-900">{day.afternoon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-gray-600">Evening:</span>
                    <span className="font-inter text-sm text-gray-900">{day.evening}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
