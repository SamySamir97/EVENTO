import React from 'react';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  bookable: boolean;
  image: string;
  description: string;
  type: string;
}

export default function EventCard({ title, icon, bookable, image, description, type }: EventCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (bookable) {
      navigate(`/events/${type}`);
    } else {
      navigate(`/venues/${type}`);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
        <p className="text-stone-600 mb-4">{description}</p>
        
        <button 
          onClick={handleClick}
          className={`w-full py-2 rounded-lg transition-colors ${
            bookable 
              ? 'bg-amber-700 text-white hover:bg-amber-800' 
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          {bookable ? 'Book Now' : 'View Venues'}
        </button>
      </div>
    </div>
  );
}