import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
import { InputField } from './InputField';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-1">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="email"
            label="Email"
            icon={<Mail size={18} />}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
          />

          <InputField
            type="password"
            label="Password"
            icon={<Lock size={18} />}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <button type="button" className="text-[#007BFF] hover:text-[#0056b3]">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BFF] text-white py-2 rounded-lg hover:bg-[#0056b3] transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{' '}
            <button type="button" className="text-[#007BFF] hover:text-[#0056b3]">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}