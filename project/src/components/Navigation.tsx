import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Tea Library', href: '#tea-library' },
    { name: 'Afternoon Tea', href: '#afternoon-tea' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Apothecary', href: '#apothecary' },
    { name: 'The Journal', href: '#journal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-emerald-800">
              The Art of Tea & Apothecary
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-emerald-800 hover:text-burgundy-700 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-emerald-800 hover:text-burgundy-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-emerald-800 hover:text-burgundy-700 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-emerald-800 hover:text-burgundy-700 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-burgundy-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-emerald-800 hover:text-burgundy-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cream-50 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-emerald-800 hover:text-burgundy-700 hover:bg-cream-100 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;