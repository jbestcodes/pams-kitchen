import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order Now', href: '/order' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pam's Food Factory</h1>
              <p className="text-xs text-orange-600">Spice Land</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;