'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { places, Place } from '@/data/places';
import { 
  MapPin, Utensils, Beer, Eye, ExternalLink, 
  Compass, Share2, Copy, Printer, Check, Target, BookOpen, Crown
} from 'lucide-react';
import { createPortal } from 'react-dom';

// Dynamic import for Map
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-medium tracking-wide">
      Loading Map...
    </div>
  )
});

export default function Home() {
  const [activeTab, setActiveTab] = useState<'Option1' | 'Option2' | 'TopChoices'>('Option1');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

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
      case 'Experience': return <Target size={14} className="text-orange-500" />;
      case 'Culture': return <BookOpen size={14} className="text-violet-500" />;
      default: return <MapPin size={14} className="text-purple-500" />;
    }
  };

  const openGoogleMaps = (place: Place, e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(`${place.name} Manchester`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleCopyItinerary = () => {
    const lines = filteredPlaces.map(p => 
      `• ${p.time ? `[${p.time}] ` : ''}${p.name} (${p.category}) - ${p.description}`
    );
    const text = `🇬🇧 Warissing in UK - ${activeTab === 'Option1' ? 'Culture & Scenery' : activeTab === 'Option2' ? 'Drinks & Blast' : 'Top Choices'}\n\n${lines.join('\n')}\n\n📍 View Map: https://warissing-in-uk.vercel.app`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* Sidebar / List View */}
      <div className="w-full lg:w-[480px] flex flex-col border-r border-slate-200 bg-white z-20 shadow-2xl h-[60vh] lg:h-full">
        
        {/* Header - Vibrant "Island Boy" Theme */}
        <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
               <h2 className="text-lg font-medium text-cyan-100 mb-1 tracking-wide">Hello Island boy! 🏝️</h2>
               <h1 className="text-3xl font-extrabold tracking-tight mb-2">Warissing in UK</h1>
               <p className="text-cyan-50 text-sm opacity-90">Enjoyyyy</p>
            </div>
            <button 
              onClick={() => setShowExportModal(true)}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
              title="Export Itinerary"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-white px-4 pt-4 gap-2 overflow-x-auto shrink-0">
          <button 
            onClick={() => setActiveTab('Option1')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${activeTab === 'Option1' 
              ? 'text-cyan-600 border-cyan-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Option 1: Culture
          </button>
          <button 
            onClick={() => setActiveTab('Option2')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${activeTab === 'Option2' 
              ? 'text-emerald-600 border-emerald-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Option 2: Drinks
          </button>
          <button 
            onClick={() => setActiveTab('TopChoices')}
            className={`pb-3 px-2 text-sm font-semibold transition-all duration-300 border-b-2 whitespace-nowrap flex items-center gap-1 ${activeTab === 'TopChoices' 
              ? 'text-purple-600 border-purple-500' 
              : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            <Crown size={14} className={activeTab === 'TopChoices' ? 'text-purple-600' : 'text-slate-400'}/>
            Top Choices
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6">
          <div className="mb-2">
            <h2 className={`text-xl font-bold ${activeTab === 'Option1' ? 'text-cyan-700' : activeTab === 'Option2' ? 'text-emerald-700' : 'text-purple-700'}`}>
              {activeTab === 'Option1' && 'Culture & Scenery'}
              {activeTab === 'Option2' && 'Drinks & Blast'}
              {activeTab === 'TopChoices' && 'The Top 5 Highlights'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {activeTab === 'Option1' && 'Walks in the park, scenery, and libraries. Relax and enjoy.'}
              {activeTab === 'Option2' && 'Best places for drinks, parties, and a memorable night out.'}
              {activeTab === 'TopChoices' && 'The absolute best, unique experiences Warissing must do.'}
            </p>
          </div>

          <div className="space-y-6 pb-12">
            {filteredPlaces.map((place) => (
              <div 
                key={place.id}
                id={`card-${place.id}`}
                onClick={() => handlePlaceClick(place.id)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer ${selectedPlaceId === place.id ? 'ring-2 ring-cyan-500 shadow-md transform scale-[1.01]' : ''}`}
              >
                {/* Image Section */}
                <div className="h-44 w-full relative overflow-hidden">
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
        <div className="p-4 bg-white border-t border-slate-100 text-center text-xs text-slate-400 font-medium shrink-0">
           Built for Warissing • Manchester 2026
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

      {/* Export Modal */}
      {showExportModal && createPortal(
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl transform transition-all scale-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Share & Export</h3>
            <p className="text-sm text-slate-500 mb-6">Take your itinerary with you.</p>
            
            <div className="space-y-3">
              <button 
                onClick={handleCopyItinerary}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 text-left group"
              >
                <div className={`p-2 rounded-full ${copySuccess ? 'bg-green-100 text-green-600' : 'bg-cyan-100 text-cyan-600'} transition-colors`}>
                  {copySuccess ? <Check size={20} /> : <Copy size={20} />}
                </div>
                <div>
                  <span className="block font-semibold text-slate-800">Copy to Clipboard</span>
                  <span className="text-xs text-slate-500">Perfect for WhatsApp or Notes</span>
                </div>
              </button>

              <button 
                onClick={handlePrint}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 text-left group"
              >
                <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                  <Printer size={20} />
                </div>
                <div>
                  <span className="block font-semibold text-slate-800">Print / Save as PDF</span>
                  <span className="text-xs text-slate-500">High-quality document view</span>
                </div>
              </button>
            </div>

            <button 
              onClick={() => setShowExportModal(false)}
              className="w-full mt-6 py-3 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Print Styles (Hidden by default, shown when printing) */}
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          .flex-1.overflow-y-auto, .flex-1.overflow-y-auto * { 
            visibility: visible; 
            overflow: visible !important;
          }
          .flex-1.overflow-y-auto {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
          }
          button { display: none !important; }
        }
      `}</style>

    </div>
  );
}
