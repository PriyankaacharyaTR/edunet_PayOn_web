import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for services, bills, bookings..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
}