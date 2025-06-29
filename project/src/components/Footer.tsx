import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'Tea Library', href: '#tea-library' },
    { name: 'Afternoon Tea', href: '#afternoon-tea' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Private Events', href: '#private-events' },
    { name: 'Gift Cards', href: '#gift-cards' }
  ];

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Shipping Info', href: '#shipping' },
    { name: 'Returns', href: '#returns' },
    { name: 'Size Guide', href: '#size-guide' },
    { name: 'Care Instructions', href: '#care' }
  ];

  return (
    <footer className="bg-emerald-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">
              The Art of Tea & Apothecary
            </h3>
            <p className="text-cream-200 mb-6 leading-relaxed">
              Where ancient wisdom meets contemporary craftsmanship. 
              Discover the ritual of tea and the healing power of botanicals.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-burgundy-700 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream-200 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream-200 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cream-300 mt-1 flex-shrink-0" />
                <p className="text-cream-200">
                  123 Botanical Lane<br />
                  Garden District<br />
                  New Orleans, LA 70118
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cream-300 flex-shrink-0" />
                <p className="text-cream-200">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cream-300 flex-shrink-0" />
                <p className="text-cream-200">hello@teaandapothecary.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-cream-300 mt-1 flex-shrink-0" />
                <div className="text-cream-200">
                  <p>Mon-Thu: 8am-9pm</p>
                  <p>Fri-Sat: 8am-10pm</p>
                  <p>Sunday: 9am-8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-emerald-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-serif font-semibold mb-4">
              Join Our Tea Community
            </h4>
            <p className="text-cream-200 mb-6">
              Subscribe for exclusive blends, early access to workshops, and tea wisdom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-emerald-800 border border-emerald-700 text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
              />
              <button className="bg-burgundy-700 text-cream-50 px-6 py-3 rounded-lg hover:bg-burgundy-600 transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-cream-300 text-sm">
            © 2024 The Art of Tea & Apothecary. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-cream-300">
            <a href="#privacy" className="hover:text-cream-50 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-cream-50 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#accessibility" className="hover:text-cream-50 transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;