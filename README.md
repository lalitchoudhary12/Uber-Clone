# Uber Clone MERN Stack Project

## Overview
This project is a clone of the Uber application built using the MERN stack (MongoDB, Express, React, Node.js). It includes both backend and frontend implementations.

## Tools Used
### Backend
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: For authentication and authorization.
- **bcrypt**: For hashing passwords.
- **dotenv**: For managing environment variables.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Tailwind CSS**: Utility-first CSS framework.

## Features
### Backend
- **User Authentication**: Users can sign up, log in, and log out.
- **Captain Authentication**: Captains can sign up, log in, and log out.
- **Ride Management**: Users can create, confirm, start, and end rides.
- **Fare Calculation**: Calculate fare based on distance and duration.
- **OTP Verification**: OTP generation and verification for ride security.
- **Socket Integration**: Real-time communication using sockets.
- **Middleware**: Authentication middleware for protecting routes.

### Frontend
- **User Interface**: Responsive UI built with React and Tailwind CSS.
- **Vehicle Selection**: Users can select different types of vehicles (car, auto, moto).
- **Fare Display**: Display fare for selected vehicle type.
- **Protected Rides**: Rides protected by authentication.

## Available Routes
### Backend
- **User Routes**
  - `/user/signup`: User signup.
  - `/user/login`: User login.
  - `/user/logout`: User logout.
- **Captain Routes**
  - `/captain/signup`: Captain signup.
  - `/captain/login`: Captain login.
  - `/captain/logout`: Captain logout.
- **Ride Routes**
  - `/rides/create`: Create a new ride.
  - `/rides/get-fare`: Get fare for a ride.
  - `/rides/confirm`: Confirm a ride.
  - `/rides/start-ride`: Start a ride.
  - `/rides/end-ride`: End a ride.
- **Maps Routes**
  - `/maps/get-coordinates`: Get coordinates for an address.
  - `/maps/get-distance-time`: Get distance and travel time between two addresses.
  - `/maps/get-suggestions`: Get autocomplete suggestions for an address.

### Frontend
- `/`: Start page.
- `/login`: User login page.
- `/signup`: User signup page.
- `/captain-login`: Captain login page.
- `/captain-signup`: Captain signup page.
- `/contact-us`: Contact us page.
- `/home`: User home page (protected).
- `/user/logout`: User logout page (protected).
- `/captain-home`: Captain home page (protected).
- `/captain/logout`: Captain logout page (protected).
- `/riding`: User riding page (protected).
- `/captain-riding`: Captain riding page (protected).

## Getting Started
### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository.
2. Install dependencies for both backend and frontend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
3. Set up environment variables in `.env` files for both backend and frontend.
   #### Backend Environment Variables
   Create a `.env` file in the `backend` directory and add the following variables:
      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      GOOGLE_MAPS_API=your_google_map_api_key
      ```
   #### Frontend Environment Variables
   Create a `.env` file in the `frontend` directory and add the following variables:
      ```env
      VITE_API_URL=http://localhost:5000
      VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
      ```
4. Running the Application
   #### Start the backend server
     ```sh
     cd backend
     node server.js
     ```
   #### Start the frontend development server
     ```sh
     cd frontend
     npm run dev
     ```

## Conclusion
```This Uber Clone project demonstrates the integration of various modern web development tools and technologies to create a full-stack application. By following the instructions provided, you can set up and run the project locally. Feel free to explore and enhance the features as per your requirements.```
