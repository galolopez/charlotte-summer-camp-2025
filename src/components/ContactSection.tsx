import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* D. Justin Baker */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">Tech Inquiries & Transportation</h3>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">D. Justin Baker</h3>
            <a href="tel:+15622215499" className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
              (562) 221-5499
            </a>
          </div>

          {/* B. Isaiah Martin */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">Lodging</h3>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">B. Isaiah Martin</h3>
            <a href="tel:+18282167708" className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
              (828) 216-7708
            </a>
          </div>

          {/* B. Travis James */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">Medical</h3>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">B. Travis James</h3>
            <a href="tel:+12528021221" className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
              (252) 802-1221
            </a>
          </div>

          {/* S. Latifa Brown */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">Medical</h3>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">S. Latifa Brown</h3>
            <a href="tel:+16143570183" className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
              (614) 357-0183
            </a>
          </div>

          {/* B. Joshua Judd */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">Transportation</h3>
            <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">B. Joshua Judd</h3>
            <a href="tel:+13528576068" className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
              (352) 857-6068
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
