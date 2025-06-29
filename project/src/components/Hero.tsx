import React from 'react';
import { ArrowDown, Coffee } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-burgundy-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-8 bg-cream-100 opacity-20 animate-steam"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-8 bg-cream-100 opacity-15 animate-steam" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-8 bg-cream-100 opacity-10 animate-steam" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Tea Cup Illustration */}
      <div className="absolute right-10 top-1/4 opacity-10 animate-float">
        <Coffee className="h-32 w-32 text-cream-100" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-cream-50 mb-6 leading-tight">
            Discover the Ritual of Tea
          </h1>
          <p className="text-xl sm:text-2xl text-cream-100 mb-8 font-light">
            Explore the Art of a Modern Apothecary
          </p>
          <p className="text-lg text-cream-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where ancient wisdom meets contemporary craftsmanship. 
            Immerse yourself in the sacred art of tea brewing and the healing power of botanicals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-burgundy-700 text-cream-50 font-semibold rounded-lg hover:bg-burgundy-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Experiences
            </button>
            <button className="px-8 py-4 border-2 border-cream-100 text-cream-100 font-semibold rounded-lg hover:bg-cream-100 hover:text-emerald-800 transition-all duration-300">
              Take Our Tea Quiz
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-cream-200" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent"></div>
    </section>
  );
};

export default Hero;