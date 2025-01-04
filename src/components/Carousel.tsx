import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Instant Money Transfers",
    description: "Send money instantly to anyone, anywhere with our secure platform",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Bill Payments Made Easy",
    description: "Pay all your bills in one place - mobile, electricity, water, and more",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Book Travel Tickets",
    description: "Book train, bus, and flight tickets hassle-free",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Secure Financial Services",
    description: "Access loans and insurance with just a few clicks",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "24/7 Customer Support",
    description: "Our dedicated team is always here to help you",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
  }
];

export function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold mb-6 transform transition-all duration-700 delay-200">{slide.title}</h2>
              <p className="text-2xl transform transition-all duration-700 delay-300">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="text-white" size={32} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}