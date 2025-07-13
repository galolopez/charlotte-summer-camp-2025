import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useInView } from '../hooks/use-in-view';

const imageList = [
  '/lost-and-found/IMG_2040.JPG',
  '/lost-and-found/IMG_2041.JPG',
  '/lost-and-found/IMG_2042.JPG',
  '/lost-and-found/IMG_2043.JPG',
  '/lost-and-found/IMG_2044.JPG',
  '/lost-and-found/IMG_2045.JPG',
  '/lost-and-found/IMG_2046.JPG',
];

const LostAndFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Lost & Found
              </h1>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-12">
                Did you leave something behind? Browse the items below to see if your lost belongings were found. If you recognize an item, please send us an email to:
              </p>
              <p className="font-inter text-2xl sm:text-3xl font-extrabold text-blue-800 leading-relaxed mb-12">
                charlotte.zionusa@gmail.com
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {imageList.map((src, idx) => {
                  const [ref, inView] = useInView<HTMLImageElement>({ threshold: 0.15, once: true });
                  return (
                    <img
                      key={src}
                      ref={ref}
                      src={src}
                      alt={`Lost item ${idx + 1}`}
                      className={`w-full h-64 object-cover rounded-lg shadow-md transition-all duration-700 ease-out ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LostAndFound; 