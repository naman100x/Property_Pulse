console.log('✅ Loaded MONGODB_URI:', process.env.MONGODB_URI);
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property.js';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

// 📝 Replace this with a valid User _id from your database
const dummyOwnerId = '59b99db4cfa9a34dcd7885b6';

const seedData = [
  {
    owner: dummyOwnerId,
    name: 'Luxury Villa in Goa',
    type: 'Villa',
    description: 'A stunning 4BHK villa in Goa with sea view.',
    location: {
      street: 'Palm Beach Road',
      city: 'Goa',
      state: 'GA',
      zipcode: '403001',
    },
    beds: 4,
    baths: 3,
    square_feet: 2500,
    amenities: ['Pool', 'Parking'],
    rates: {
      nightly: 5000,
      weekly: 30000,
      monthly: 100000,
    },
    seller_info: {
      name: 'Dummy Seller 1',
      email: 'seller1@example.com',
      phone: '9876543210',
    },
    images: [
      'https://res.cloudinary.com/ddzex2myl/image/upload/v1751527769/pune_bnecfh.webp',
    ],
    is_featured: true,
  },
  {
    owner: dummyOwnerId,
    name: 'Studio Apartment in Pune',
    type: 'Apartment',
    description: 'Cozy studio perfect for solo travelers or couples.',
    location: {
      street: 'Koregaon Park',
      city: 'Pune',
      state: 'MH',
      zipcode: '411001',
    },
    beds: 1,
    baths: 1,
    square_feet: 600,
    amenities: ['Wi-Fi'],
    rates: {
      nightly: 1200,
      weekly: 7000,
      monthly: 20000,
    },
    seller_info: {
      name: 'Dummy Seller 2',
      email: 'seller2@example.com',
      phone: '9988776655',
    },
    images: [
      'https://res.cloudinary.com/ddzex2myl/image/upload/v1751527624/mumbai_aaa5tg.webp',
    ],
    is_featured: false,
  },
  {
    owner: dummyOwnerId,
    name: '3BHK Flat in Bangalore',
    type: 'Apartment',
    description: 'Modern 3BHK in the heart of Bangalore with lift access.',
    location: {
      street: 'Indiranagar',
      city: 'Bangalore',
      state: 'KA',
      zipcode: '560038',
    },
    beds: 3,
    baths: 2,
    square_feet: 1500,
    amenities: ['Lift', 'Wi-Fi'],
    rates: {
      nightly: 3000,
      weekly: 18000,
      monthly: 60000,
    },
    seller_info: {
      name: 'Dummy Seller 3',
      email: 'seller3@example.com',
      phone: '9123456780',
    },
    images: [
      'https://res.cloudinary.com/ddzex2myl/image/upload/v1751527605/bangalore_x4uzjo.webp',
    ],
    is_featured: false,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    await Property.deleteMany();
    await Property.insertMany(seedData);
    console.log('🌱 Seed data inserted!');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error seeding data:', err);
  }
};

seedDB();
