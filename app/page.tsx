'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { places, Place } from '@/data/places';
import { MapPin, Utensils, Beer, Eye, ExternalLink, Sun, Moon, Compass, Coffee } from 'lucide-react';
import Image from 'next/image';

// Dynamic import for Map
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 font-medium tracking-wide">Loading Map...</div>
});

export default function Home() {
  const [activeTab, setActiveTab] = useState<'1' | '2' | 'BestOf'>('1');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const filteredPlaces = useMemo(() => {
    return places.filter(p => p.day === activeTab);
  }, [activeTab]);

  const handlePlaceClick = (id: string) => {
    setSelectedPlaceId(id);
    const element = document.getElementById(`card-${id}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getIcon = (category: Place['category']) => {
    switch (category) {
      case 'Food': return <Utensils size={14} className="text-amber-500" />;
      case 'Drink': return <Beer size={14} className="text-pink-500" />;
      case 'View': return <Eye size={14} className="text-cyan-500" />;
      case 'Walk': return <Compass size={14} className="text-emerald-500" />;
      default: return <MapPin size={14} className="text-purple-500" />;
    }
  };

  const openGoogleMaps = (place: Place, e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(`${place.name} Manchester`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* Sidebar / List View */}
      <div className="w-full lg:w-[480px] flex flex-col border-r border-slate-200 bg-white z-20 shadow-2xl h-[60vh] lg:h-full">
        
        {/* Header - Vibrant "Island Boy" Theme */}
        <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"></div>
          
          <h2 className="text-lg font-medium text-cyan-100 mb-1 tracking-wide">Hello Island boy! 🏝️</h2>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Warissing in UK</h1>
          <p className="text-cyan-50 text-sm opacity-90">Your curated Manchester pocket guide.</p>
        </div>

        {/* Tabs - Clean & Modern */}
        <div className="flex border-b border-slate-100 bg-white px-4 pt-4 gap-4">
          <button 
            onClick={() => setActiveTab('1')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 ${
              activeTab === '1' 
              ? 'text-cyan-600 border-cyan-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Day 1: Grand
          </button>
          <button 
            onClick={() => setActiveTab('2')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 ${
              activeTab === '2' 
              ? 'text-emerald-600 border-emerald-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Day 2: Local
          </button>
          <button 
            onClick={() => setActiveTab('BestOf')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 ${
              activeTab === 'BestOf' 
              ? 'text-purple-600 border-purple-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Best Of
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6">
          <div className="mb-2">
            <h2 className={`text-xl font-bold ${
              activeTab === '1' ? 'text-cyan-700' : activeTab === '2' ? 'text-emerald-700' : 'text-purple-700'
            }`}>
              {activeTab === '1' && 'The Grand Entrance'}
              {activeTab === '2' && "The Local's Vibe"}
              {activeTab === 'BestOf' && 'Top Picks'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {activeTab === '1' && 'Skyline views, iconic dining, and high-end vibes.'}
              {activeTab === '2' && 'Street food, hidden bars, and neighborhood grit.'}
              {activeTab === 'BestOf' && 'Curated favorites by category.'}
            </p>
          </div>

          <div className="space-y-6 pb-12">
            {filteredPlaces.map((place) => (
              <div 
                key={place.id}
                id={`card-${place.id}`}
                onClick={() => handlePlaceClick(place.id)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer ${
                  selectedPlaceId === place.id ? 'ring-2 ring-cyan-500 shadow-md transform scale-[1.01]' : ''
                }`}
              >
                {/* Image Section */}
                <div className="h-40 w-full relative overflow-hidden">
                   <img 
                    src={place.image} 
                    alt={place.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   
                   {/* Time Badge */}
                   {place.time && (
                     <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                       <span className="text-xs font-bold text-slate-800 tracking-wide">{place.time}</span>
                     </div>
                   )}

                   {/* Category Badge */}
                   <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {getIcon(place.category)}
                      <span className="text-xs font-medium">{place.category}</span>
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{place.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{place.description}</p>
                  
                  {/* Google Maps Button */}
                  <button 
                    onClick={(e) => openGoogleMaps(place, e)}
                    className="w-full mt-2 py-2.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-50 hover:text-cyan-600 transition-colors flex items-center justify-center gap-2 border border-slate-200"
                  >
                    <ExternalLink size={14} />
                    Open in Google Maps
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
           Built for Waris • Manchester 2026
        </div>
      </div>

      {/* Map Area */}
      <div className="w-full lg:w-2/3 lg:flex-1 h-[40vh] lg:h-full relative shadow-inner z-0">
        <Map 
          places={filteredPlaces} 
          selectedPlaceId={selectedPlaceId} 
          onSelectPlace={handlePlaceClick}
        />
      </div>

    </div>
  );
}
