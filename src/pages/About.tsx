import React from 'react';
import { Award, Heart, Users, Star } from 'lucide-react';
import Layout from '../components/Layout';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion for Cooking",
      description: "Every dish is prepared with love and dedication to authentic Kenyan flavors"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality Ingredients",
      description: "We source the finest, freshest ingredients to ensure exceptional taste"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Focus",
      description: "Building connections through food and bringing families together"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "Excellence",
      description: "Committed to delivering outstanding service and unforgettable meals"
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Pam's Food Factory
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the story behind the flavors and the passion that drives our commitment to authentic Kenyan cuisine.
            </p>
          </div>

          {/* Pam's Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Pamellah Oduor, founder of Pam's Food Factory"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Pamellah Oduor
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Pamellah Oduor, founder of Pam's Food Factory (also known as Spice Land), 
                  made a bold decision to leave her successful banking career to follow her true passion for cooking.
                </p>
                <p>
                  With years of experience creating authentic Kenyan meals for family and friends, 
                  Pam recognized that food has the power to bring people together and create lasting memories.
                </p>
                <p>
                  Today, she leads a thriving community called "Let's Cook Kenyan Meals" where she shares 
                  her knowledge, recipes, and love for traditional Kenyan cuisine with food enthusiasts across the country.
                </p>
                <p className="font-semibold text-orange-600">
                  "My mission is simple: bringing joy and great taste to families across Kenya, 
                  one authentic meal at a time."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                Bringing joy and great taste to families across Kenya through authentic, 
                home-cooked meals that celebrate our rich culinary heritage and create 
                meaningful connections around the dinner table.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do at Pam's Food Factory
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of "Let's Cook Kenyan Meals" - a vibrant community where we share recipes, 
                cooking tips, and celebrate the rich flavors of Kenyan cuisine together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <p className="text-gray-700">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <p className="text-gray-700">Meals Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700">Traditional Recipes</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://wa.me/254722858272?text=Hi%20Pam%2C%20I%27d%20like%20to%20join%20the%20Let%27s%20Cook%20Kenyan%20Meals%20community!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}