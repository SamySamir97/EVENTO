import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-amber-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&q=80&w=2940')"
        }}
      ></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Egypt's Most Exciting Events
          </h1>
          <p className="text-xl mb-8 text-amber-100">
            From ancient cultural celebrations to modern festivals, find and book your next unforgettable experience.
          </p>
          
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search events..."
                className="flex-1 px-4 py-2 rounded-md border border-stone-200 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}