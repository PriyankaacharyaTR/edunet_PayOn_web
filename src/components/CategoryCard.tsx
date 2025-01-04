import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function CategoryCard({ title, description, icon: Icon, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#EBF5FF] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left w-full h-[280px] border border-blue-100 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-10">
        <Icon size={180} className="text-[#007BFF]" />
      </div>
      <div className="flex flex-col space-y-6 relative z-10">
        <div className="bg-[#007BFF]/10 p-4 rounded-lg w-fit">
          <Icon size={32} className="text-[#007BFF]" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </button>
  );
}