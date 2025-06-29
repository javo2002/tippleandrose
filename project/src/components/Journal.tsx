import React from 'react';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  date: string;
}

const Journal: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: "The Ancient Art of Tea Ceremonies: A Journey Through Time",
    excerpt: "Discover how tea ceremonies have evolved from ancient traditions to modern mindfulness practices, exploring the spiritual and cultural significance of this timeless ritual.",
    author: "Elena Rosewood",
    readTime: "8 min read",
    category: "Tea Lore",
    image: "https://images.pexels.com/photos/4040659/pexels-photo-4040659.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "December 15, 2024"
  };

  const blogPosts: BlogPost[] = [
    {
      id: 2,
      title: "5 Herbs for Winter Wellness",
      excerpt: "Boost your immunity and warmth with these traditional herbs perfect for the cold season.",
      author: "Marcus Chen",
      readTime: "5 min read",
      category: "Herbalist's Notebook",
      image: "https://images.pexels.com/photos/4198543/pexels-photo-4198543.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 12, 2024"
    },
    {
      id: 3,
      title: "Perfect Pairings: Tea & Pastries",
      excerpt: "Learn the art of matching teas with desserts to create harmonious flavor experiences.",
      author: "Isabella Thornton",
      readTime: "6 min read",
      category: "Recipes & Pairings",
      image: "https://images.pexels.com/photos/6419166/pexels-photo-6419166.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 10, 2024"
    },
    {
      id: 4,
      title: "Behind the Scenes: Our Blending Process",
      excerpt: "Take a peek into our apothecary workshop where master blenders create signature teas.",
      author: "Theodore Mills",
      readTime: "7 min read",
      category: "Behind the Scenes",
      image: "https://images.pexels.com/photos/4040659/pexels-photo-4040659.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 8, 2024"
    },
    {
      id: 5,
      title: "The Science of Steeping",
      excerpt: "Understanding temperature, timing, and technique for the perfect cup every time.",
      author: "Dr. Sarah Chen",
      readTime: "4 min read",
      category: "Tea Lore",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 5, 2024"
    }
  ];

  const categories = ["Tea Lore", "Herbalist's Notebook", "Recipes & Pairings", "Behind the Scenes"];

  return (
    <section id="journal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-emerald-700" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-6">
            The Journal
          </h2>
          <div className="w-24 h-1 bg-burgundy-700 mx-auto mb-8"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Explore the world of tea, herbs, and wellness through our collection of stories, 
            recipes, and insights from master blenders and herbalists.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-800 to-burgundy-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-cream-50">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-cream-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-cream-200 text-sm">Featured</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-cream-200 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-cream-300" />
                      <span className="text-cream-300 text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-cream-300" />
                      <span className="text-cream-300 text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <span className="text-cream-300 text-sm">{featuredPost.date}</span>
                </div>
                
                <button className="bg-cream-50 text-emerald-800 px-6 py-3 rounded-lg hover:bg-cream-100 transition-colors duration-300 flex items-center space-x-2 font-semibold">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="px-4 py-2 bg-emerald-800 text-cream-50 rounded-full font-medium">
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-cream-100 text-emerald-800 rounded-full hover:bg-emerald-100 transition-colors duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-emerald-800 mb-3 leading-tight group-hover:text-burgundy-700 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-emerald-700 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-emerald-600 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-800 to-burgundy-800 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-cream-50 mb-4">
            Stay Steeped in Knowledge
          </h3>
          <p className="text-cream-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our journal for weekly insights on tea culture, herbal wisdom, 
            and exclusive recipes from our master blenders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-cream-300"
            />
            <button className="bg-cream-50 text-emerald-800 px-6 py-3 rounded-lg hover:bg-cream-100 transition-colors duration-300 font-semibold">
              Subscribe
            </button>
          </div>
          
          <p className="text-cream-300 text-sm mt-4">
            Plus, get a free "Guide to Tea Blending" when you subscribe!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journal;