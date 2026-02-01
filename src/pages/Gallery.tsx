import React from 'react';
import Layout from '../components/Layout';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Beautifully plated Kenyan meal with multiple dishes",
      category: "Plated Dishes"
    },
    {
      id: 2,
      src: "https://placehold.co/600x400",
      alt: "Fresh chapati being prepared in the kitchen",
      category: "Cooking Process"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Aromatic pilau rice with spices",
      category: "Traditional Dishes"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Perfectly grilled nyama choma",
      category: "Grilled Specialties"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Protein waffles with fresh blueberry compote",
      category: "Breakfast Items"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Creamy scrambled eggs with herbs",
      category: "Breakfast Items"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Golden crispy spring rolls",
      category: "Snacks"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Fresh sukuma wiki vegetables",
      category: "Sides"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Traditional ugali preparation",
      category: "Traditional Dishes"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Colorful array of fresh ingredients",
      category: "Ingredients"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Chef preparing traditional Kenyan spices",
      category: "Cooking Process"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Beautifully arranged catering spread",
      category: "Catering"
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our delicious creations. From traditional Kenyan dishes to modern breakfast favorites, 
              every meal is crafted with passion and presented with pride.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Craving What You See?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Order any of these delicious dishes and taste the authentic flavors of Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Menu
              </a>
              <a
                href="https://wa.me/254722858272?text=Hi%20Pam%2C%20I%27d%20like%20to%20order%20from%20Pam%27s%20Food%20Factory.%20Details%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}