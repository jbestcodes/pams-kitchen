import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp",
      description: "Quick orders and inquiries",
      contact: "0784230406",
      action: "https://wa.me/254784230406",
      actionText: "Message Us"
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "Phone",
      description: "Call us directly",
      contact: "0784230406",
      action: "tel:+254784230406",
      actionText: "Call Now"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "Location",
      description: "We serve across",
      contact: "Nairobi, Kenya",
      action: null,
      actionText: null
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "pamoduor",
      url: "https://facebook.com/pamoduor",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@letscookwithpamke",
      url: "https://instagram.com/letscookwithpamke",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to order or have questions? We'd love to hear from you! 
              Reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  {method.contact}
                </p>
                {method.action && (
                  <a
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    {method.actionText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Quick Order Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Order?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Orders are fulfilled via WhatsApp for quick and personal service
              </p>
              <a
                href="https://wa.me/254784230406?text=Hi%20julie%2C%20I%27d%20like%20to%20order%2Frequest%20website%20like%20this%27s%20Food%20Factory.%20Details%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Follow Us
              </h2>
              <p className="text-lg text-gray-600">
                Stay connected and join our cooking community on social media
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-4 p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200 ${social.color}`}
                >
                  {social.icon}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{social.name}</h3>
                    <p className="text-gray-600">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join "Let's Cook Kenyan Meals"
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Be part of our vibrant cooking community where we share recipes, 
                cooking tips, and celebrate the rich flavors of Kenyan cuisine together.
              </p>
              <a
                href="https://wa.me/254784230406?text=Hi%20Pam%2C%20I%27d%20like%20to%20join%20the%20Let%27s%20Cook%20Kenyan%20Meals%20community!"
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