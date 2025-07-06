import React from 'react';
import { useInView } from '../hooks/use-in-view';

const contacts = [
  {
    category: 'Tech Inquiries & Transportation',
    name: 'D. Justin Baker',
    phone: '+15622215499',
    display: '(562) 221-5499',
  },
  {
    category: 'Lodging',
    name: 'B. Isaiah Martin',
    phone: '+18282167708',
    display: '(828) 216-7708',
  },
  {
    category: 'Medical',
    name: 'B. Travis James',
    phone: '+12528021221',
    display: '(252) 802-1221',
  },
  {
    category: 'Medical',
    name: 'S. Latifa Brown',
    phone: '+16143570183',
    display: '(614) 357-0183',
  },
  {
    category: 'Transportation',
    name: 'B. Joshua Judd',
    phone: '+13528576068',
    display: '(352) 857-6068',
  },
];

const ContactSection = () => {
  // Create a wow effect ref for each contact
  const wowRefs = contacts.map(() => useInView<HTMLDivElement>({ threshold: 0.15, once: true }));

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-encode text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Points of Contact
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, idx) => {
            const [ref, inView] = wowRefs[idx];
            return (
              <div
                key={contact.name}
                ref={ref}
                className={`bg-white rounded-2xl p-8 shadow-md border border-neutral-200 text-center h-64 flex flex-col justify-center transition-opacity duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              >
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">{contact.category}</h3>
                <h3 className="font-encode font-semibold text-xl text-gray-900 mb-2">{contact.name}</h3>
                <a href={`tel:${contact.phone}`} className="font-inter text-gray-600 hover:text-amber-600 transition-colors">
                  {contact.display}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
