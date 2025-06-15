
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Fragrance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Fragrance
              </h1>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Details about the fragrance program and activities.
              </p>
              <div className="mt-12 p-12 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300">
                <p className="font-inter text-gray-500">
                  Content coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fragrance;
