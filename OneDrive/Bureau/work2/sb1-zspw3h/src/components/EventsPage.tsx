import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar as CalendarIcon, Clock, CloudLightning } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  locationUrl: string;
  price: number;
}

export default function EventsPage() {
  const { type } = useParams<{ type: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;
  // Mock data - in a real app, this would come from an API
  const events: Event[] = [
    {
      id: 1,
      title: type === 'cultural' ? 'Egyptian Heritage Festival' : 'Cairo Jazz Festival',
      image: type === 'cultural' 
        ? "https://images.unsplash.com/photo-1560704429-529dd0e8536c?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-15',
      time: '18:00',
      location: 'Cairo Opera House',
      locationUrl: 'https://maps.google.com/?q=Cairo+Opera+House',
      price: 250
    },
    {
      id: 2,
      title: type === 'cultural' ? 'Pharaonic Village Tour' : 'Electronic Music Night',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1562693314-bbb2a73119e7?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-16',
      time: '10:00',
      location: 'Giza',
      locationUrl: 'https://maps.google.com/?q=Giza',
      price: 180
    },
    {
      id: 3,
      title: type === 'cultural' ? 'Islamic Cairo Walking Tour' : 'Sufi Music Night',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-17',
      time: '09:00',
      location: 'Khan el-Khalili',
      locationUrl: 'https://maps.google.com/?q=Khan+el-Khalili',
      price: 150
    },
    {
      id: 4,
      title: type === 'cultural' ? 'Nubian Village Experience' : 'Classical Orchestra',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1590766940554-153a4d9afce0?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-18',
      time: '11:00',
      location: 'Aswan',
      locationUrl: 'https://maps.google.com/?q=Aswan',
      price: 300
    },
    {
      id: 5,
      title: type === 'cultural' ? 'Coptic Cairo Tour' : 'Rock Music Festival',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-19',
      time: '09:30',
      location: 'Old Cairo',
      locationUrl: 'https://maps.google.com/?q=Old+Cairo',
      price: 120
    },
    {
      id: 6,
      title: type === 'cultural' ? 'Alexandria Library Visit' : 'Jazz by the Sea',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-20',
      time: '10:30',
      location: 'Alexandria',
      locationUrl: 'https://maps.google.com/?q=Alexandria+Library',
      price: 200
    },
    {
      id: 7,
      title: type === 'cultural' ? 'Luxor Temple Night Show' : 'Desert Music Festival',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1587975844577-56ec27570c82?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-21',
      time: '19:00',
      location: 'Luxor',
      locationUrl: 'https://maps.google.com/?q=Luxor+Temple',
      price: 280
    },
    {
      id: 8,
      title: type === 'cultural' ? 'Egyptian Museum Tour' : 'Nile Jazz Cruise',
      image: type === 'cultural'
        ? "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&q=80&w=2940"
        : "https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&q=80&w=2940",
      date: '2024-04-22',
      time: '09:00',
      location: 'Cairo',
      locationUrl: 'https://maps.google.com/?q=Egyptian+Museum',
      price: 160
    }
  ];

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">
        {type === 'cultural' ? 'Cultural Events' : 'Music Festivals'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.filter((ev)=> { if(ev.title?.toLowerCase().includes((type ??'').toLowerCase() ) === true){
          return ev 
        }  if(type === ""){return currentEvents } }).map((event) => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-stone-600">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <div className="flex items-center text-stone-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                
                <a 
                  href={event.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-700 hover:text-amber-800"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </a>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-amber-900">
                  {event.price} EGP
                </span>
              </div>
              
              <button className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors">
                Book Now
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