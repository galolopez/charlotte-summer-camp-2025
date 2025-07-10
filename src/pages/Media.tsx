import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">

        {/* Share Your Camp Footage Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-encode text-2xl sm:text-3xl font-semibold text-blue-900 mb-6">
                Upload Your Camp Footage
              </h2>
              <p className="font-inter text-lg text-blue-800 leading-relaxed mb-8">
                God bless you!<br></br> If you captured any photos or videos during the summer camp, please share them with us.<br></br> Thank you and we hope to see you again soon!
              </p>
              <a
                href="https://drive.google.com/drive/folders/1OGVMupcf9-Yc7S-ZwJtuuZ6DQPahylVa?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-md"
              >
                Upload Here
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media; 