import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#007BFF] to-[#29077d] text-white py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fast, Secure & Reliable Payments
          </h1>
          <p className="text-xl mb-8">
            Transfer money, pay bills, and manage your finances with ease
          </p>
          <button className="bg-white text-[#007BFF] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center">
            Get Started <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
