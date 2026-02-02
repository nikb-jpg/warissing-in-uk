'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Place } from '@/data/places';
import { useEffect } from 'react';

interface MapProps {
  places: Place[];
  selectedPlaceId: string | null;
  onSelectPlace: (id: string) => void;
}

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function Map({ places, selectedPlaceId, onSelectPlace }: MapProps) {
  const selectedPlace = places.find(p => p.id === selectedPlaceId);
  const center: [number, number] = selectedPlace 
    ? [selectedPlace.lat, selectedPlace.lng] 
    : [53.4808, -2.2426]; // Default Manchester center
  
  const zoom = selectedPlace ? 15 : 13;

  return (
    <MapContainer 
      center={[53.4808, -2.2426]} 
      zoom={13} 
      className="w-full h-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      <MapUpdater center={center} zoom={zoom} />

      {places.map((place) => (
        <Marker 
          key={place.id} 
          position={[place.lat, place.lng]}
          eventHandlers={{
            click: () => onSelectPlace(place.id),
          }}
        >
          <Popup>
            <div className="text-gray-900">
              <h3 className="font-bold">{place.name}</h3>
              <p className="text-sm">{place.category}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
