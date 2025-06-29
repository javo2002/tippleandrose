import React from 'react';
import { Calendar, BookOpen, Beaker, ArrowRight } from 'lucide-react';

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      icon: Calendar,
      title: 'Afternoon Tea',
      subtitle: 'Victorian Elegance Reimagined',
      description: 'Indulge in our signature afternoon tea experience featuring artisanal pastries, premium tea selections, and elegant service in our Victorian-inspired parlor.',
      image: 'https://images.pexels.com/photos/6419166/pexels-photo-6419166.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $45 per person',
      duration: '2 hours',
      highlights: ['Seasonal tea pairings', 'House-made pastries', 'Private table service']
    },
    {
      icon: BookOpen,
      title: 'Tea Tasting Workshops',
      subtitle: 'Journey Through Flavors',
      description: 'Discover the nuanced world of tea through guided tastings, learning about terroir, processing methods, and the art of proper brewing.',
      image: 'https://images.pexels.com/photos/4040659/pexels-photo-4040659.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $65 per person',
      duration: '90 minutes',
      highlights: ['6 premium tea tastings', 'Expert guidance', 'Take-home tea samples']
    },
    {
      icon: Beaker,
      title: 'Apothecary & Custom Blends',
      subtitle: 'Botanical Alchemy',
      description: 'Create your own signature blend with our master herbalist, learning about the therapeutic properties of herbs and botanicals.',
      image: 'https://images.pexels.com/photos/4198543/pexels-photo-4198543.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $85 per session',
      duration: '2.5 hours',
      highlights: ['Personal consultation', 'Custom blend creation', '3-month supply included']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-6">
            Featured Experiences
          </h2>
          <div className="w-24 h-1 bg-burgundy-700 mx-auto mb-8"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Immerse yourself in the world of tea through our carefully curated experiences, 
            each designed to deepen your appreciation and knowledge.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-cream-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <experience.icon className="h-6 w-6 text-emerald-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-burgundy-700 font-medium mb-4">
                    {experience.subtitle}
                  </p>
                  <p className="text-emerald-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-emerald-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-emerald-700">
                          <div className="w-2 h-2 bg-burgundy-700 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Duration */}
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-emerald-100">
                    <div>
                      <p className="text-emerald-800 font-semibold">{experience.price}</p>
                      <p className="text-emerald-600 text-sm">{experience.duration}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-emerald-800 text-cream-50 py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;