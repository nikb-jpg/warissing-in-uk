export interface Place {
  id: string;
  name: string;
  category: 'View' | 'Food' | 'Drink' | 'Walk' | 'Experience' | 'Culture';
  description: string;
  day: 'Option1' | 'Option2' | 'TopChoices';
  lat: number;
  lng: number;
  time?: string;
  image: string;
  addressId?: string;
}

export const places: Place[] = [
  // Option 1: Culture & Scenery (Formerly Day 1)
  {
    id: 'john-rylands',
    name: 'John Rylands Library',
    category: 'Culture',
    description: 'A neo-Gothic masterpiece. The Reading Room is pure Hogwarts vibes. A must-see architectural gem.',
    day: 'Option1',
    lat: 53.4801,
    lng: -2.2486,
    time: '11:00 AM',
    image: '/images/john-rylands.png'
  },
  {
    id: 'castlefield-viaduct',
    name: 'Castlefield Viaduct',
    category: 'Walk',
    description: "Manchester's 'High Line'. An elevated sky park built on a Victorian railway viaduct.",
    day: 'Option1',
    lat: 53.4752,
    lng: -2.2546,
    time: '1:00 PM',
    image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'science-industry',
    name: 'Science & Industry Museum',
    category: 'Experience',
    description: 'Explore the industrial heritage in the worlds first industrial city.',
    day: 'Option1',
    lat: 53.4767,
    lng: -2.2553,
    time: '3:00 PM',
    image: '/images/science-industry.png'
  },
  {
    id: '20-stories',
    name: '20 Stories',
    category: 'View',
    description: 'Highest outdoor terrace in the city. The best introduction to Manchester.',
    day: 'Option1',
    lat: 53.4816,
    lng: -2.2505,
    time: '5:00 PM',
    image: '/images/20-stories.png'
  },
  {
    id: 'king-st-townhouse',
    name: 'King Street Townhouse',
    category: 'View',
    description: 'South terrace offers a unique view of the Town Hall.',
    day: 'Option1',
    lat: 53.4792,
    lng: -2.2428,
    time: '6:30 PM',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nq-stroll',
    name: 'Northern Quarter Stroll',
    category: 'Walk',
    description: 'Vintage shops, record stores, and street art. The creative heart of the city.',
    day: 'Option1',
    lat: 53.4835,
    lng: -2.2343,
    time: '8:00 PM',
    image: '/images/nq-stroll.png'
  },

  // Option 2: Drinks & Blast (Formerly Day 2)
  {
    id: 'mackie-mayor',
    name: 'Mackie Mayor',
    category: 'Food',
    description: 'Restored 1858 meat market turned premium food hall. Unbeatable vibes.',
    day: 'Option2',
    lat: 53.4851,
    lng: -2.2355,
    time: '12:00 PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'flight-club',
    name: 'Flight Club',
    category: 'Experience',
    description: 'Social darts reinvented. High energy, great cocktails, and a beautiful fairground decor.',
    day: 'Option2',
    lat: 53.4812,
    lng: -2.2452,
    time: '3:00 PM',
    image: '/images/flight-club.png'
  },
  {
    id: 'tattu',
    name: 'Tattu',
    category: 'Food',
    description: 'Modern Chinese in a stunning cherry-blossom setting. Order the Wagyu dumplings.',
    day: 'Option2',
    lat: 53.4803,
    lng: -2.2504,
    time: '6:00 PM',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cloud-23',
    name: 'Cloud 23',
    category: 'Drink',
    description: '23rd floor bar at the Hilton. Floor-to-ceiling windows for skyline drinks.',
    day: 'Option2',
    lat: 53.4754,
    lng: -2.2509,
    time: '8:00 PM',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'washhouse',
    name: 'The Washhouse',
    category: 'Drink',
    description: 'Speakeasy disguised as a laundromat. You enter through a dryer machine.',
    day: 'Option2',
    lat: 53.4814,
    lng: -2.2372,
    time: '10:00 PM',
    image: '/images/washhouse.png'
  },
  {
    id: 'rudys',
    name: "Rudy's Pizza (Ancoats)",
    category: 'Food',
    description: "Ancoats institution. Often voted some of the best pizza in the world.",
    day: 'Option2',
    lat: 53.4847,
    lng: -2.2287,
    time: 'Late Night',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },

  // Top Choices (New Unique/Memorable)
  {
    id: 'freight-island',
    name: 'Escape to Freight Island',
    category: 'Experience',
    description: 'A vibrant urban market and entertainment hub. Think street food, craft beer, and neon vibes in a former depot.',
    day: 'TopChoices',
    lat: 53.4764,
    lng: -2.2274,
    image: '/images/freight-island.png'
  },
  {
    id: 'dishoom',
    name: 'Dishoom Manchester',
    category: 'Food',
    description: 'Bombay comfort food in the stunning Grade II listed Manchester Hall. The architecture alone is worth the visit.',
    day: 'TopChoices',
    lat: 53.4805,
    lng: -2.2492,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chaos-karts',
    name: 'Chaos Karts',
    category: 'Experience',
    description: 'Real-life Mario Kart. Immersive AR racing experience with virtual power-ups. Unique and high energy.',
    day: 'TopChoices',
    lat: 53.4771,
    lng: -2.2571,
    image: '/images/chaos-karts.png'
  },
  {
    id: 'blues-kitchen',
    name: 'The Blues Kitchen',
    category: 'Drink',
    description: 'Live soul, blues, and funk music every weekend. Incredible atmosphere, barbecue food, and dancing.',
    day: 'TopChoices',
    lat: 53.4800,
    lng: -2.2475,
    image: '/images/blues-kitchen.png'
  },
  {
    id: 'junkyard-golf',
    name: 'Junkyard Golf Club',
    category: 'Experience',
    description: 'Crazy golf with a twist. Neon lights, cocktails, and weirdly wonderful courses. A Manchester classic night out.',
    day: 'TopChoices',
    lat: 53.4745,
    lng: -2.2458,
    image: '/images/junkyard-golf.png'
  }
];