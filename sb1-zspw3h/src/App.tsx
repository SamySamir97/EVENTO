import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calendar, Music, Briefcase, Building2, Pyramid } from 'lucide-react';
import EventCard from './components/EventCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import EventsPage from './components/EventsPage';
import VenuesPage from './components/VenuesPage';

function App() {
  const categories = [
    {
      id: 1,
      title: 'Cultural Events',
      icon: <Pyramid className="w-6 h-6" />,
      bookable: true,
      image: "https://images.unsplash.com/photo-1608500218890-c4f9019787e1?auto=format&fit=crop&q=80&w=2940",
      description: "Experience authentic Egyptian heritage through exhibitions, performances, and traditional celebrations.",
      type: "cultural"
    },
    {
      id: 2,
      title: 'Music Festivals',
      icon: <Music className="w-6 h-6" />,
      bookable: true,
      image: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?auto=format&fit=crop&q=80&w=2940",
      description: "Immerse yourself in vibrant musical experiences from traditional to contemporary.",
      type: "music"
    },
    {
      id: 3,
      title: 'Working Spaces',
      icon: <Briefcase className="w-6 h-6" />,
      bookable: false,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2940",
      description: "Discover modern coworking spaces with a touch of Egyptian charm.",
      type: "workspace"
    },
    {
      id: 4,
      title: 'Rooftop Venues',
      icon: <Building2 className="w-6 h-6" />,
      bookable: false,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2725",
      description: "Experience Cairo's skyline from stunning rooftop locations.",
      type: "rooftop"
    }
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main className="container mx-auto px-4 py-12">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">Discover Events</h2>
                  <p className="text-stone-600">Find and book the perfect event in Egypt</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categories.map((category) => (
                    <EventCard key={category.id} {...category} />
                  ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
                  <div className="max-w-2xl mx-auto text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-amber-700" />
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Upcoming Featured Events</h3>
                    <p className="text-stone-600 mb-6">Stay tuned for our carefully curated selection of the most anticipated events across Egypt.</p>
                    <button className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
                      View Calendar
                    </button>
                  </div>
                </div>
              </main>
              <TeamSection />
            </>
          } />
          <Route path="/events/:type" element={<EventsPage />} />
          <Route path="/venues/:type" element={<VenuesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;