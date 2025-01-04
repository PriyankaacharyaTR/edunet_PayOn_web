import React, { useState } from 'react';
import { Home, Users, Phone, LogIn } from 'lucide-react';
import { Link } from './Link';
import { LoginModal } from './auth/LoginModal';

export function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#007BFF]">PayOn</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" icon={<Home size={18} />}>Home</Link>
            <Link href="#about" icon={<Users size={18} />}>About Us</Link>
            <Link href="#contact" icon={<Phone size={18} />}>Contact Us</Link>
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center space-x-1 bg-[#007BFF] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
      
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </nav>
  );
}