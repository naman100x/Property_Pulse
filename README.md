# 🏡 Property Pulse

**Property Pulse** is a full-stack real estate web application built with **Next.js**. It allows users to browse, search, and post properties for rent or sale. The platform features secure user authentication, responsive UI, property management dashboard, and an integrated contact system.

---

## 🚀 Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL / MongoDB
- **Authentication**: NextAuth.js
- **File Uploads**: Cloudinary
- **Deployment**: Vercel
- **State Management**: React Context API / Zustand (optional)

---

## ✨ Features

- 🔐 User authentication with OAuth (Google/GitHub) & credentials
- 🏘️ Explore all property listings
- 🔍 Advanced filters (price, location, category)
- ➕ Add, edit, delete your own listings
- 📄 Property detail pages with image gallery
- 💬 Contact agent form with email support
- 📱 Responsive design across all devices
- 🧑‍💼 Personalized user dashboard
- 📦 Clean, scalable folder structure

---

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/)
- Cloudinary account. Sign up at [Cloudinary](https://cloudinary.com/)
- Google console account. Sign up at [Google Cloud](https://console.cloud.google.com/)

### `.env` File

Rename the `env.example` file to `.env` and fill in the following environment variables:

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate with the following command:
  ```bash
  openssl rand -base64 32
  ```
- Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
- Get your Google Geocoding API key from your Google console account and add it to `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY`.

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
