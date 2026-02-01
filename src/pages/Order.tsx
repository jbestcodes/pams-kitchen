import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '../components/Layout';

const orderSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().min(5, 'Please provide delivery location'),
  dateTime: z.string().min(1, 'Please select date and time'),
  dishes: z.array(z.string()).min(1, 'Please select at least one dish'),
  instructions: z.string().optional()
});

type OrderForm = z.infer<typeof orderSchema>;

export default function Order() {
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const dishes = [
    "Protein Waffles with Blueberry Compote - KSh 450",
    "Egg Scramble - KSh 350",
    "Chapati & Beef - KSh 650",
    "Pilau - KSh 750",
    "Nyama Choma - KSh 850",
    "Spring Rolls - KSh 300",
    "Ugali - KSh 150",
    "Sukuma Wiki - KSh 200"
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema)
  });

  const handleDishChange = (dish: string, checked: boolean) => {
    let newDishes;
    if (checked) {
      newDishes = [...selectedDishes, dish];
    } else {
      newDishes = selectedDishes.filter(d => d !== dish);
    }
    setSelectedDishes(newDishes);
    setValue('dishes', newDishes);
  };

  const onSubmit = (data: OrderForm) => {
    const orderDetails = `
Order Details:
Name: ${data.name}
Phone: ${data.phone}
Delivery Location: ${data.location}
Date/Time Needed: ${data.dateTime}
Selected Dishes:
${data.dishes.map(dish => `- ${dish}`).join('\n')}
${data.instructions ? `Special Instructions: ${data.instructions}` : ''}
    `.trim();

    const message = `Hi Pam, I'd like to place an order from Pam's Food Factory.\n\n${orderDetails}`;
    const whatsappUrl = `https://wa.me/254722858272?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Place Your Order
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll contact you via WhatsApp to confirm your order
            </p>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0722858272"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Location *
                </label>
                <input
                  {...register('location')}
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your delivery address"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>

              {/* Date/Time */}
              <div>
                <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Date & Time Needed *
                </label>
                <input
                  {...register('dateTime')}
                  type="datetime-local"
                  id="dateTime"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.dateTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.dateTime.message}</p>
                )}
              </div>

              {/* Dishes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Dishes *
                </label>
                <div className="space-y-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {dishes.map((dish, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDishes.includes(dish)}
                        onChange={(e) => handleDishChange(dish, e.target.checked)}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{dish}</span>
                    </label>
                  ))}
                </div>
                {errors.dishes && (
                  <p className="mt-1 text-sm text-red-600">{errors.dishes.message}</p>
                )}
              </div>

              {/* Special Instructions */}
              <div>
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  {...register('instructions')}
                  id="instructions"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Send Order via WhatsApp
              </button>
            </form>

            {/* Order Note */}
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Note:</strong> Orders are fulfilled via WhatsApp 0722858272. 
                After submitting this form, you'll be redirected to WhatsApp with your order details pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}