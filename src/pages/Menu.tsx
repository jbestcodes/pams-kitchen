import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'mains', name: 'Mains' },
    { id: 'sides', name: 'Sides' },
    { id: 'snacks', name: 'Snacks' }
  ];

  const dishes = [
    {
      id: 1,
      name: "Protein Waffles with Blueberry Compote",
      category: "breakfast",
      price: "KSh 450",
      description: "Fluffy protein-packed waffles topped with fresh blueberry compote",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Egg Scramble",
      category: "breakfast",
      price: "KSh 350",
      description: "Creamy scrambled eggs with herbs and spices",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Chapati & Beef",
      category: "mains",
      price: "KSh 650",
      description: "Soft homemade chapati served with tender, spiced beef stew",
      image: "https://placehold.co/500x400"
    },
    {
      id: 4,
      name: "Pilau",
      category: "mains",
      price: "KSh 750",
      description: "Aromatic spiced rice cooked with tender meat and traditional spices",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Nyama Choma",
      category: "mains",
      price: "KSh 850",
      description: "Perfectly grilled meat seasoned with traditional Kenyan spices",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Spring Rolls",
      category: "snacks",
      price: "KSh 300",
      description: "Crispy golden spring rolls filled with fresh vegetables",
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Ugali",
      category: "sides",
      price: "KSh 150",
      description: "Traditional Kenyan staple made from maize flour",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Sukuma Wiki",
      category: "sides",
      price: "KSh 200",
      description: "Fresh collard greens sautéed with onions and spices",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredDishes = activeCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  const handleRequestDish = (dishName: string) => {
    const message = `Hi Pam, I'd like to order ${dishName} from Pam's Food Factory. Details: `;
    const whatsappUrl = `https://wa.me/254722858272?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our delicious selection of authentic Kenyan dishes, prepared fresh daily with love and traditional recipes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dish.name}
                    </h3>
                    <span className="text-lg font-bold text-orange-600">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {dish.description}
                  </p>
                  <button
                    onClick={() => handleRequestDish(dish.name)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Request This Dish
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Note */}
          <div className="mt-12 text-center bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ready to Order?
            </h3>
            <p className="text-gray-600 mb-4">
              Orders are fulfilled via WhatsApp for quick and personal service
            </p>
            <a
              href="https://wa.me/254722858272"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              WhatsApp: 0722858272
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}