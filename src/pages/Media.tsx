import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">

        {/* Summer Camp Recap Video Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-encode text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Summer Camp 2025 Recap Video
              </h2>
              <div className="w-16 h-1 bg-purple-500 mb-6 mx-auto"></div>
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/NzgUmHYyLgM"
                    title="Summer Camp 2025 Recap Video"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

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