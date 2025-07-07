import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useInView } from '../hooks/use-in-view';

const Activities = () => {
  // Create wow effect refs for each section
  const [whiteWaterRef, whiteWaterInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  const [movieRef, movieInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  const [teamBuildingRef, teamBuildingInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Activities
              </h1>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>

            {/* The National White Water Center */}
            <div 
              ref={whiteWaterRef}
              className={`mb-16 transition-all duration-700 ease-out ${
                whiteWaterInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-md border border-blue-200">
                <h2 className="font-encode text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center">
                  The National White Water Center
                </h2>
                <div className="w-16 h-1 bg-blue-500 mb-6 mx-auto"></div>
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the thrill of white water rafting and outdoor adventures at one of the premier outdoor recreation facilities in the Southeast. The National White Water Center offers a variety of activities for all skill levels.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500 text-center">
                  <h3 className="font-encode font-semibold text-4xl text-red-600 mb-3">⚠️ Attention ⚠️</h3><br></br>
                  <p className="font-inter font-bold text-xl text-gray-700 mb-4">
                    Please sign the required waiver before attending the White Water Center!
                  </p><br></br>
                  <a
                    href="https://apps.1risk.cloud/1waiverKioskv3/sign?a=aHR0cHM6Ly9teS4xcmlzay5uZXQvd2hpdGV3YXRlcmFwaXxiOWYzMDkyYjk4M2E0Mjk1ODhmMzYzMmZmMmY2ZmIzNnxmNGY2YTRlZi01ZTQzLTQzZTQtOWY0MC1hNzNhOTE5ZDBiZmV8Ny8zLzIwMjUgMToxNDowMCBQTXw3LzcvMjAyNSAxMDoxNDowMCBBTXxHTQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-encode font-semibold px-8 py-4 text-lg rounded-lg transition-colors duration-200 shadow-md"
                  >
                    Take me to Waiver
                  </a>
                </div>
                
                <div className="mt-8 text-center">
                  <h4 className="font-encode font-semibold text-xl text-gray-900 mb-4">Rafting Schedule</h4>
                  <img
                    src="/rafting-schedule.png"
                    alt="Rafting Schedule"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Movie Night */}
            <div 
              ref={movieRef}
              className={`mb-16 transition-all duration-700 ease-out ${
                movieInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md border border-purple-200">
                <h2 className="font-encode text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center">
                  Movie Night
                </h2>
                <div className="w-16 h-1 bg-purple-500 mb-6 mx-auto"></div>
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                  Follows Korean independence activists who launched a daring attack in Harbin against the Japanese to gain their country's independence.
                </p>
                <div className="flex flex-col items-center space-y-6">
                  <img
                    src="/harbin.jpg"
                    alt="Harbin Movie"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="w-full max-w-2xl">
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://www.youtube.com/embed/7ZEwmuOuxFQ"
                        title="Harbin Movie Trailer"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Building Activities */}
            <div 
              ref={teamBuildingRef}
              className={`mb-16 transition-all duration-700 ease-out ${
                teamBuildingInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md border border-green-200">
                <h2 className="font-encode text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center">
                  Team Building Activities
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6 mx-auto"></div>
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                  Team building exercises and group activities designed to foster cooperation and unity.
                </p>
                <div className="flex justify-center">
                  <img
                    src="/outdoor-schedule.png"
                    alt="Outdoor Schedule"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities; 