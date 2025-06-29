import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';

interface Tea {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  caffeine: 'High' | 'Medium' | 'Low' | 'None';
  flavor: string[];
  origin: string;
}

const TeaLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Green', 'Black', 'White', 'Oolong', 'Herbal', 'Pu-erh'];

  const teas: Tea[] = [
    {
      id: 1,
      name: "Dragon Well Supreme",
      type: "Green",
      description: "A delicate green tea with a sweet, nutty flavor and beautiful flat leaves.",
      price: 24.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "Medium",
      flavor: ["Fresh", "Sweet", "Grassy"],
      origin: "Hangzhou, China"
    },
    {
      id: 2,
      name: "Earl Grey Royale",
      type: "Black",
      description: "Our signature Earl Grey blend with bergamot, cornflower, and lavender.",
      price: 28.99,
      rating: 4.9,
      image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "High",
      flavor: ["Citrus", "Floral", "Bold"],
      origin: "Sri Lanka"
    },
    {
      id: 3,
      name: "Moonlight Chamomile",
      type: "Herbal",
      description: "A soothing blend of chamomile, lavender, and lemon balm for peaceful evenings.",
      price: 22.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "None",
      flavor: ["Floral", "Honey", "Calming"],
      origin: "European Blend"
    },
    {
      id: 4,
      name: "Golden Chai Masala",
      type: "Black",
      description: "Traditional chai with cardamom, cinnamon, ginger, and cloves.",
      price: 26.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "High",
      flavor: ["Spiced", "Warming", "Rich"],
      origin: "India"
    },
    {
      id: 5,
      name: "Silver Needle White",
      type: "White",
      description: "Delicate white tea with subtle sweetness and pristine silver buds.",
      price: 45.99,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "Low",
      flavor: ["Delicate", "Sweet", "Light"],
      origin: "Fujian, China"
    },
    {
      id: 6,
      name: "Iron Goddess Oolong",
      type: "Oolong",
      description: "Complex oolong with floral aroma and lingering sweet finish.",
      price: 38.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      caffeine: "Medium",
      flavor: ["Floral", "Complex", "Smooth"],
      origin: "Fujian, China"
    }
  ];

  const filteredTeas = teas.filter(tea => {
    const matchesCategory = selectedCategory === 'All' || tea.type === selectedCategory;
    const matchesSearch = tea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tea.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tea-library" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-6">
            The Tea Library
          </h2>
          <div className="w-24 h-1 bg-burgundy-700 mx-auto mb-8"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Discover our curated collection of premium teas from around the world, 
            each selected for its exceptional quality and unique character.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-400" />
              <input
                type="text"
                placeholder="Search teas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-800 text-cream-50'
                      : 'bg-white text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tea Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeas.map((tea) => (
            <div key={tea.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tea.image} 
                  alt={tea.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tea.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tea.caffeine === 'High' ? 'bg-burgundy-100 text-burgundy-800' :
                    tea.caffeine === 'Medium' ? 'bg-gold-100 text-gold-800' :
                    tea.caffeine === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {tea.caffeine} Caffeine
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-emerald-800">
                    {tea.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
                    <span className="text-sm text-emerald-700">{tea.rating}</span>
                  </div>
                </div>

                <p className="text-emerald-600 text-sm mb-3">{tea.origin}</p>
                <p className="text-emerald-700 mb-4 leading-relaxed">
                  {tea.description}
                </p>

                {/* Flavor Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tea.flavor.map((flavor, index) => (
                    <span key={index} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">
                      {flavor}
                    </span>
                  ))}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-50">
                  <span className="text-2xl font-bold text-emerald-800">
                    ${tea.price}
                  </span>
                  <button className="bg-burgundy-700 text-cream-50 px-4 py-2 rounded-lg hover:bg-burgundy-600 transition-colors duration-300 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-emerald-800 text-emerald-800 font-semibold rounded-lg hover:bg-emerald-800 hover:text-cream-50 transition-all duration-300">
            View Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeaLibrary;