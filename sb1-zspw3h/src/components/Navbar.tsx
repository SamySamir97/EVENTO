import React, { useState } from 'react';
import { Pyramid, Menu, X, Facebook, MessageCircle, Phone } from 'lucide-react';
import { useAuthModals } from './AuthProvider';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const { openLogin, openSignup } = useAuthModals();
  const { logout } = useAuth();

  const contactLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      href: 'https://facebook.com/evento.eg',
      color: 'hover:text-blue-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Telegram',
      href: 'https://t.me/eventoeg',
      color: 'hover:text-sky-500'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/201234567890',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Pyramid className="w-8 h-8 text-amber-700" />
            <span className="text-2xl font-bold text-amber-900">EVENTO.eg</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors">Home</a>
            <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors">Events</a>
            <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors">Venues</a>
            <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors">Our Team</a>
            <div className="relative">
              <button 
                className="text-stone-600 hover:text-amber-700 transition-colors flex items-center space-x-1"
                onMouseEnter={() => setShowContactMenu(true)}
                onMouseLeave={() => setShowContactMenu(false)}
              >
                <span>Contact Us</span>
                {showContactMenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {contactLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 px-4 py-2 text-stone-600 hover:bg-stone-50 ${link.color}`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={openLogin}
              className="px-4 py-2 text-amber-700 hover:text-amber-800 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={openSignup}
              className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-amber-700 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors px-2">Home</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors px-2">Events</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors px-2">Venues</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors px-2">Our Team</a>
              <div className="px-2">
                <p className="text-stone-600 mb-2">Contact Us:</p>
                <div className="flex space-x-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-stone-600 ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <button 
                  onClick={openLogin}
                  className="w-full px-4 py-2 text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={openSignup}
                  className="w-full px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}