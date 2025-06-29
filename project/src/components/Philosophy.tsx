import React from 'react';
import { Leaf, Heart, Star, Users } from 'lucide-react';

const Philosophy: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Artisanal Craftsmanship',
      description: 'Every blend is carefully crafted with hand-selected, premium botanicals sourced from sustainable farms around the world.'
    },
    {
      icon: Heart,
      title: 'Wellness & Ritual',
      description: 'We believe in the healing power of tea and the importance of mindful moments in our daily lives.'
    },
    {
      icon: Star,
      title: 'Quality & Purity',
      description: 'Our commitment to excellence ensures every cup delivers the purest flavors and therapeutic benefits.'
    },
    {
      icon: Users,
      title: 'Community & Connection',
      description: 'Building a community of tea lovers who share knowledge, stories, and the sacred ritual of tea.'
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-burgundy-700 mx-auto mb-8"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for the ancient art of tea and the healing wisdom of herbs, 
            we bridge the gap between tradition and modern wellness.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-2xl font-serif font-semibold text-emerald-800 mb-2">2018</h3>
                    <p className="text-emerald-700">Our founder's journey began with a transformative tea ceremony in Kyoto, sparking a deep appreciation for the ritual and artistry of tea.</p>
                  </div>
                  <div className="w-4 h-4 bg-burgundy-700 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-burgundy-700 rounded-full relative z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-2xl font-serif font-semibold text-emerald-800 mb-2">2020</h3>
                    <p className="text-emerald-700">The apothecary was born, combining centuries-old herbal wisdom with modern understanding of wellness and healing.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-2xl font-serif font-semibold text-emerald-800 mb-2">2023</h3>
                    <p className="text-emerald-700">Opening our doors to create a sanctuary where tea lovers gather to explore, learn, and connect through shared experiences.</p>
                  </div>
                  <div className="w-4 h-4 bg-burgundy-700 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-burgundy-100 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-emerald-700 group-hover:text-burgundy-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-emerald-800 mb-4">
                {value.title}
              </h3>
              <p className="text-emerald-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;