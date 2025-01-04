import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">We'd love to hear from you. Please fill out this form.</p>
          </div>
          
          <div className="bg-[#F8FAFF] p-8 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="text-[#007BFF] mb-3" size={24} />
                <span className="text-sm">support@payon.com</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="text-[#007BFF] mb-3" size={24} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="text-[#007BFF] mb-3" size={24} />
                <span className="text-sm">123 Payment Street, NY</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#007BFF] text-white py-3 rounded-lg hover:bg-[#0056b3] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}