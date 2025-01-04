import React from 'react';

interface LinkProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Link({ href, icon, children }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-gray-600 hover:text-[#007BFF] transition-colors"
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}