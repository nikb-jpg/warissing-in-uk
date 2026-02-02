export interface Place {
  id: string;
  name: string;
  category: 'View' | 'Food' | 'Drink' | 'Walk' | 'Experience' | 'Culture';
  description: string;
  day: '1' | '2' | 'BestOf';
  lat: number;
  lng: number;
  time?: string;
  image: string;
  addressId?: string;
}

export const places: Place[] = [
  // Day 1: Grand Entrance
  {
    id: 'john-rylands',
    name: 'John Rylands Library',
    category: 'Culture',
    description: 'A neo-Gothic masterpiece that looks more like a cathedral. The Reading Room is pure Hogwarts vibes.',
    day: '1',
    lat: 53.4801,
    lng: -2.2486,
    time: '3:00 PM',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '20-stories',
    name: '20 Stories',
    category: 'View',
    description: 'Highest outdoor terrace in the city. The best introduction to Manchester.',
    day: '1',
    lat: 53.4816,
    lng: -2.2505,
    time: '5:00 PM',
    image: 'https://images.unsplash.com/photo-1519671482502-9759160d2303?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tattu',
    name: 'Tattu',
    category: 'Food',
    description: 'Modern Chinese in a stunning cherry-blossom setting. Order the Wagyu dumplings.',
    day: '1',
    lat: 53.4803,
    lng: -2.2504,
    time: '7:30 PM',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloud-23',
    name: 'Cloud 23',
    category: 'Drink',
    description: '23rd floor bar at the Hilton. Floor-to-ceiling windows for skyline drinks.',
    day: '1',
    lat: 53.4754,
    lng: -2.2509,
    time: '10:00 PM',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },

  // Day 2: Local's Vibe
  {
    id: 'castlefield-viaduct',
    name: 'Castlefield Viaduct',
    category: 'Walk',
    description: "Manchester's 'High Line'. An elevated sky park built on a Victorian railway viaduct.",
    day: '2',
    lat: 53.4752,
    lng: -2.2546,
    time: '11:00 AM',
    image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mackie-mayor',
    name: 'Mackie Mayor',
    category: 'Food',
    description: 'Restored 1858 meat market turned premium food hall. Unbeatable vibes.',
    day: '2',
    lat: 53.4851,
    lng: -2.2355,
    time: '1:00 PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nq-stroll',
    name: 'Northern Quarter Stroll',
    category: 'Walk',
    description: 'Vintage shops, record stores, and street art. The creative heart of the city.',
    day: '2',
    lat: 53.4835,
    lng: -2.2343,
    time: '2:30 PM',
    image: 'https://images.unsplash.com/photo-1499242502266-9c6bc7636e05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'flight-club',
    name: 'Flight Club',
    category: 'Experience',
    description: 'Social darts reinvented. High energy, great cocktails, and a beautiful fairground decor.',
    day: '2',
    lat: 53.4812,
    lng: -2.2452,
    time: '5:00 PM',
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rudys',
    name: "Rudy's Pizza (Ancoats)",
    category: 'Food',
    description: "Ancoats institution. Often voted some of the best pizza in the world.",
    day: '2',
    lat: 53.4847,
    lng: -2.2287,
    time: '7:30 PM',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'washhouse',
    name: 'The Washhouse',
    category: 'Drink',
    description: 'Speakeasy disguised as a laundromat. You enter through a dryer machine.',
    day: '2',
    lat: 53.4814,
    lng: -2.2372,
    time: '9:30 PM',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },

  // Best Of Extras
  {
    id: 'king-st-townhouse',
    name: 'King Street Townhouse',
    category: 'View',
    description: 'South terrace offers a unique view of the Town Hall.',
    day: 'BestOf',
    lat: 53.4792,
    lng: -2.2428,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'schofields',
    name: "Schofield's Bar",
    category: 'Drink',
    description: 'Classic, elegant, award-winning cocktails.',
    day: 'BestOf',
    lat: 53.4795,
    lng: -2.2486,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'speak-in-code',
    name: 'Speak in Code',
    category: 'Drink',
    description: 'Experimental, plant-based cocktail bar.',
    day: 'BestOf',
    lat: 53.4809,
    lng: -2.2450,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'science-industry',
    name: 'Science & Industry Museum',
    category: 'Experience',
    description: 'Explore the industrial heritage in the worlds first industrial city.',
    day: 'BestOf',
    lat: 53.4767,
    lng: -2.2553,
    image: 'https://images.unsplash.com/photo-1580491321727-88f61536b567?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
