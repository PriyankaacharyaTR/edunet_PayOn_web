import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export function InputField({ label, icon, ...props }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`w-full rounded-lg border border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-colors ${
            icon ? 'pl-10' : 'pl-4'
          } pr-4 py-2`}
        />
      </div>
    </div>
  );
}