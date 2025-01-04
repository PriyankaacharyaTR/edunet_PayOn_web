import React, { useState } from 'react';
import { CategoryCard } from './CategoryCard';
import { services } from '../data/services';

export function Services() {
  const [activeCategory, setActiveCategory] = useState<
    keyof typeof services | null
  >(null);

  const handleServiceClick = (service: string) => {
    alert(`Navigating to ${service} service page`);
  };

  return (
    <div id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#007BFF] font-semibold mb-4 block text-3xl">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-[#007BFF] to-[#29077d] bg-clip-text text-transparent">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless digital payments and services with our
            comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(services).map(([category, { icon, description }]) => (
            <CategoryCard
              key={category}
              title={category}
              description={description}
              icon={icon}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category
                    ? null
                    : (category as keyof typeof services)
                )
              }
            />
          ))}
        </div>

        {activeCategory && (
          <div className="bg-[#F8FAFF] p-8 rounded-xl shadow-lg mt-8 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              {activeCategory} Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services[activeCategory].items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(item.name)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="text-[#007BFF] bg-blue-50 p-3 rounded-lg">
                    <item.icon size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
