import React from 'react';

const LostAndFoundBanner = () => (
  <div
    className="block w-full bg-red-600 text-white text-center font-bold py-2 px-4 text-sm sm:text-base tracking-wide mt-16 z-50 relative"
    style={{ letterSpacing: '0.03em' }}
  >
    Did you leave something behind at the summer camp? Check out our{' '}
    <a
      href="/lost-and-found"
      className="underline font-extrabold hover:text-amber-200 transition-colors"
    >
      Lost & Found
    </a>
    {' '}page!
  </div>
);

export default LostAndFoundBanner; 