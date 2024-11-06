import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, Users, Check, X } from 'lucide-react';

interface Venue {
  id: number;
  title: string;
  image: string;
  available: boolean;
  capacity: number;
  location: string;
  locationUrl: string;
  pricePerHour: number;
}

export default function VenuesPage() {
  const { type } = useParams<{ type: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 8;

  // Mock data - in a real app, this would come from an API
  const venues: Venue[] = [
    {
      id: 1,
      title: type === 'workspace' ? 'The Hive Coworking' : 'Sky Lounge Cairo',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=2940",
      available: true,
      capacity: type === 'workspace' ? 50 : 100,
      location: 'Maadi, Cairo',
      locationUrl: 'https://maps.google.com/?q=Maadi+Cairo',
      pricePerHour: type === 'workspace' ? 50 : 200
    },
    {
      id: 2,
      title: type === 'workspace' ? 'Innovation Hub' : 'Nile View Terrace',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=2940",
      available: false,
      capacity: type === 'workspace' ? 30 : 80,
      location: 'Zamalek, Cairo',
      locationUrl: 'https://maps.google.com/?q=Zamalek+Cairo',
      pricePerHour: type === 'workspace' ? 40 : 180
    },
    {
      id: 3,
      title: type === 'workspace' ? 'Tech Valley Space' : 'Pyramid View Rooftop',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=2940",
      available: true,
      capacity: type === 'workspace' ? 40 : 120,
      location: 'Giza',
      locationUrl: 'https://maps.google.com/?q=Giza',
      pricePerHour: type === 'workspace' ? 45 : 250
    },
    {
      id: 4,
      title: type === 'workspace' ? 'Creative Corner' : 'Alexandria Sea View',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1588974269162-4c0d5ccc6094?auto=format&fit=crop&q=80&w=2940",
      available: true,
      capacity: type === 'workspace' ? 25 : 90,
      location: type === 'workspace' ? 'Heliopolis, Cairo' : 'Alexandria',
      locationUrl: type === 'workspace' ? 'https://maps.google.com/?q=Heliopolis+Cairo' : 'https://maps.google.com/?q=Alexandria',
      pricePerHour: type === 'workspace' ? 35 : 150
    },
    {
      id: 5,
      title: type === 'workspace' ? 'Business Hub' : 'Garden City Terrace',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=2940",
      available: false,
      capacity: type === 'workspace' ? 35 : 70,
      location: 'Garden City, Cairo',
      locationUrl: 'https://maps.google.com/?q=Garden+City+Cairo',
      pricePerHour: type === 'workspace' ? 55 : 170
    },
    {
      id: 6,
      title: type === 'workspace' ? 'Startup Space' : 'Downtown Skyline',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1577084381380-7ec7c47cae1d?auto=format&fit=crop&q=80&w=2940",
      available: true,
      capacity: type === 'workspace' ? 45 : 110,
      location: 'Downtown Cairo',
      locationUrl: 'https://maps.google.com/?q=Downtown+Cairo',
      pricePerHour: type === 'workspace' ? 60 : 220
    },
    {
      id: 7,
      title: type === 'workspace' ? 'Digital Oasis' : 'Marina Rooftop',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?auto=format&fit=crop&q=80&w=2940",
      available: true,
      capacity: type === 'workspace' ? 30 : 85,
      location: type === 'workspace' ? 'Smart Village' : 'North Coast',
      locationUrl: type === 'workspace' ? 'https://maps.google.com/?q=Smart+Village' : 'https://maps.google.com/?q=Marina+North+Coast',
      pricePerHour: type === 'workspace' ? 65 : 280
    },
    {
      id: 8,
      title: type === 'workspace' ? 'Tech Hub' : 'Citadel View',
      image: type === 'workspace'
        ? "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2940",
      available: false,
      capacity: type === 'workspace' ? 40 : 95,
      location: 'Islamic Cairo',
      locationUrl: 'https://maps.google.com/?q=Islamic+Cairo',
      pricePerHour: type === 'workspace' ? 45 : 190
    }
  ];

  const totalPages = Math.ceil(venues.length / venuesPerPage);
  const startIndex = (currentPage - 1) * venuesPerPage;
  const endIndex = startIndex + venuesPerPage;
  const currentVenues = venues.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">
        {type === 'workspace' ? 'Working Spaces' : 'Rooftop Venues'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVenues.map((venue) => (
          <div key={venue.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img 
                src={venue.image}
                alt={venue.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                venue.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center space-x-1">
                  {venue.available ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>{venue.available ? 'Available' : 'Booked'}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{venue.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-stone-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Capacity: {venue.capacity} people</span>
                </div>
                
                <a 
                  href={venue.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-700 hover:text-amber-800"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{venue.location}</span>
                </a>

                <div className="flex items-center text-stone-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{venue.pricePerHour} EGP/hour</span>
                </div>
              </div>
              
              <button 
                className={`w-full py-2 rounded-lg transition-colors ${
                  venue.available
                    ? 'bg-amber-700 text-white hover:bg-amber-800'
                    : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                }`}
                disabled={!venue.available}
              >
                {venue.available ? 'Book Venue' : 'Currently Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-amber-700 hover:bg-amber-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}