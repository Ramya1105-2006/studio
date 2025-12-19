import { Movie, User, City, Booking, Show } from './types';

export const users: User[] = [
  { id: 'user-1', name: 'John Doe', email: 'john@example.com' },
];

export const genres = ['Sci-Fi', 'Cyberpunk', 'Fantasy', 'Adventure', 'Action', 'Drama', 'Comedy', 'Mystery', 'War', 'Romance', 'Thriller', 'Horror', 'Crime', 'Biography', 'Sport'];
export const languages = ['English', 'Mandarin', 'Spanish', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Hindi'];

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: 'https://picsum.photos/seed/inception/800/1200',
    posterHint: 'abstract cityscape',
    language: 'English',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: 148,
    rating: 8.8,
  },
  {
    id: 'movie-2',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://picsum.photos/seed/darkknight/800/1200',
    posterHint: 'dark hero',
    language: 'English',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 152,
    rating: 9.0,
  },
  {
    id: 'movie-3',
    title: 'Vikram',
    description: 'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled web of clues leads him to the drug kingpin of Chennai.',
    posterUrl: 'https://picsum.photos/seed/vikram/800/1200',
    posterHint: 'action hero',
    language: 'Tamil',
    genre: ['Action', 'Thriller'],
    duration: 175,
    rating: 8.4,
  },
  {
    id: 'movie-4',
    title: "K.G.F: Chapter 2",
    description: 'In the blood-soaked Kolar Gold Fields, Rocky\'s name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.',
    posterUrl: 'https://picsum.photos/seed/kgf2/800/1200',
    posterHint: 'powerful man',
    language: 'Kannada',
    genre: ['Action', 'Crime', 'Drama'],
    duration: 168,
    rating: 8.3,
  },
  {
    id: 'movie-5',
    title: 'RRR',
    description: 'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
    posterUrl: 'https://picsum.photos/seed/rrr/800/1200',
    posterHint: 'two heroes',
    language: 'Telugu',
    genre: ['Action', 'Drama'],
    duration: 187,
    rating: 7.9,
  },
  {
    id: 'movie-6',
    title: 'Dangal',
    description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.',
    posterUrl: 'https://picsum.photos/seed/dangal/800/1200',
    posterHint: 'wrestling family',
    language: 'Hindi',
    genre: ['Action', 'Biography', 'Drama'],
    duration: 161,
    rating: 8.4,
  },
  {
    id: 'movie-7',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterUrl: 'https://picsum.photos/seed/interstellar/800/1200',
    posterHint: 'space astronaut',
    language: 'English',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    duration: 169,
    rating: 8.6,
  },
  {
    id: 'movie-8',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: 'https://picsum.photos/seed/parasite/800/1200',
    posterHint: 'family drama',
    language: 'English', // Assuming for filter purposes
    genre: ['Comedy', 'Drama', 'Thriller'],
    duration: 132,
    rating: 8.6,
  },
  {
    id: 'movie-9',
    title: 'The Wandering Earth',
    description: 'As the sun is dying out, people all around the world build giant planet thrusters to move Earth out of its orbit and sail Earth to a new star system.',
    posterUrl: 'https://picsum.photos/seed/wanderingearth/800/1200',
    posterHint: 'planet space',
    language: 'Mandarin',
    genre: ['Sci-Fi', 'Action'],
    duration: 125,
    rating: 7.9,
  },
  {
    id: 'movie-10',
    title: 'Avengers: Endgame',
    description: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
    posterUrl: 'https://picsum.photos/seed/endgame/800/1200',
    posterHint: 'superhero team',
    language: 'English',
    genre: ['Action', 'Adventure', 'Drama'],
    duration: 181,
    rating: 8.4,
  },
   {
    id: 'movie-11',
    title: 'Asuran',
    description: 'A farmer from an underprivileged caste clashes with a wealthy, upper-caste landlord.',
    posterUrl: 'https://picsum.photos/seed/asuran/800/1200',
    posterHint: 'village action',
    language: 'Tamil',
    genre: ['Action', 'Drama'],
    duration: 141,
    rating: 8.9,
  },
   {
    id: 'movie-12',
    title: 'Super Deluxe',
    description: 'An unfaithful wife, an estranged father, and an angry son find their lives intertwining on a fateful day.',
    posterUrl: 'https://picsum.photos/seed/superdeluxe/800/1200',
    posterHint: 'multiple stories',
    language: 'Tamil',
    genre: ['Thriller', 'Drama', 'Comedy'],
    duration: 176,
    rating: 8.4,
  },
   {
    id: 'movie-13',
    title: '3 Idiots',
    description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    posterUrl: 'https://picsum.photos/seed/3idiots/800/1200',
    posterHint: 'college friends',
    language: 'Hindi',
    genre: ['Comedy', 'Drama'],
    duration: 170,
    rating: 8.4,
  },
   {
    id: 'movie-14',
    title: 'Andhadhun',
    description: 'A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically not know about.',
    posterUrl: 'https://picsum.photos/seed/andhadhun/800/1200',
    posterHint: 'blind pianist',
    language: 'Hindi',
    genre: ['Crime', 'Thriller'],
    duration: 139,
    rating: 8.2,
  },
];

const generateBookedSeats = (totalSeats: number, fraction: number): string[] => {
    const bookedCount = Math.floor(totalSeats * fraction);
    const seats: string[] = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const cols = 10;
    
    while(seats.length < bookedCount) {
        const row = rows[Math.floor(Math.random() * rows.length)];
        const col = Math.floor(Math.random() * cols) + 1;
        const seatNumber = `${row}${col}`;
        if (!seats.includes(seatNumber)) {
            seats.push(seatNumber);
        }
    }
    return seats;
};


const shows: Show[] = [
    { id: 'show-1', time: '14:00', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.4) },
    { id: 'show-2', time: '17:00', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.6) },
    { id: 'show-3', time: '20:00', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.8) },
    { id: 'show-4', time: '15:00', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.3) },
    { id: 'show-5', time: '18:30', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.5) },
    { id: 'show-6', time: '21:30', totalSeats: 60, bookedSeatNumbers: generateBookedSeats(60, 0.7) },
];

export const cities: City[] = [
  {
    id: 'city-1',
    name: 'Metropolis',
    theatres: [
      { id: 'theatre-1', name: 'Grand Cinemax', address: '123 Film Row', shows: [shows[0], shows[1], shows[2]] },
      { id: 'theatre-2', name: 'The Picture Palace', address: '456 Movie Lane', shows: [shows[3], shows[4], shows[5]] },
    ],
  },
  {
    id: 'city-2',
    name: 'Gotham',
    theatres: [
      { id: 'theatre-3', name: 'Artisan Films', address: '789 Indie Blvd', shows: [shows[0], shows[4], shows[2]] },
      { id: 'theatre-4', name: 'Multiplex 3000', address: '101 Blockbuster Ave', shows: [shows[3], shows[1], shows[5]] },
    ],
  },
];

export const bookings: Booking[] = [
    {
        id: 'booking-1',
        userId: 'user-1',
        movieId: 'movie-1',
        theatreId: 'theatre-1',
        showId: 'show-1',
        seatNumbers: ['C5', 'C6'],
        totalAmount: 300.00,
        bookingTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    }
];

export const createBooking = async (bookingData: Omit<Booking, 'id' | 'bookingTime'>): Promise<Booking> => {
  // In a real app, this would interact with a database and a payment gateway.
  // We'll simulate that here.
  return new Promise(resolve => {
    setTimeout(() => {
      const newBooking: Booking = {
        ...bookingData,
        id: `booking-${Date.now()}`,
        bookingTime: new Date(),
      };
      
      // Add booking to our mock database
      bookings.push(newBooking);

      // Update booked seats for the show
      const city = cities.find(c => c.theatres.some(t => t.id === bookingData.theatreId));
      const theatre = city?.theatres.find(t => t.id === bookingData.theatreId);
      const show = theatre?.shows.find(s => s.id === bookingData.showId);
      if (show) {
          show.bookedSeatNumbers.push(...bookingData.seatNumbers);
      }

      resolve(newBooking);
    }, 1500); // Simulate network delay
  });
};
