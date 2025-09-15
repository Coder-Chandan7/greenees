import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full bg-green-600 text-white py-2 px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <span className="text-sm sm:text-base">Your Opportunity Starts Here. Be Our Franchise Partner. Be the Growth.</span>
      <Link
        to="/franchise/#franchise-form" 
        className="whitespace-nowrap text-sm sm:text-base font-semibold glow-on-hover px-3 sm:px-4 py-1 rounded-full bg-green-200 text-green-800 hover:bg-green-100 hover:text-green-900 transition-all"
      >
        Join Us →
      </Link>
    </div>
  );
};

export default Banner;
