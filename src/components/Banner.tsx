import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full bg-green-600 text-white py-2 text-center flex items-center justify-center gap-2">
      <span>Your Opportunity Starts Here. Be Our Franchise Partner. Be the Growth.</span>
      <Link
        to="/franchise/#franchise-form" 
        className="font-semibold glow-on-hover px-4 py-1 rounded-full bg-green-200 hover:text-green-200 transition-colors"
      >
        Join Us →
      </Link>
    </div>
  );
};

export default Banner;
