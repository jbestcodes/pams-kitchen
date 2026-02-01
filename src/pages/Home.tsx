import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, Heart, Star } from 'lucide-react';
import Layout from '../components/Layout';

export default function Home() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-orange-500" />,
      title: "Authentic Kenyan Flavors",
      description: "Traditional recipes passed down through generations"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Fresh Daily",
      description: "Prepared fresh every day with the finest ingredients"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Made with Love",
      description: "Every dish is crafted with passion and care"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Quality Guaranteed",
      description: "Exceptional taste and quality in every bite"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Pam's Food Factory
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-600 font-semibold mb-4">
                Fresh Home-Cooked Kenyan Meals & Catering
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Serving happiness through authentic Kenyan flavors | Orders via WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/menu"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Menu
                </Link>
                <Link
                  to="/order"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delicious Kenyan food spread featuring traditional dishes"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pam's Food Factory?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best of Kenyan cuisine with our commitment to quality, authenticity, and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Dishes
            </h2>
            <p className="text-lg text-gray-600">
              Taste the flavors that keep our customers coming back
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chapati & Beef",
                image: "https://placehold.co/500x400",
                description: "Soft chapati served with tender, spiced beef"
              },
              {
                name: "Pilau",
                image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Aromatic spiced rice with tender meat"
              },
              {
                name: "Nyama Choma",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                description: "Perfectly grilled meat with traditional spices"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {dish.description}
                  </p>
                  <Link
                    to="/menu"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    View Full Menu →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Authentic Kenyan Flavors?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and taste the difference that passion makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Order Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}