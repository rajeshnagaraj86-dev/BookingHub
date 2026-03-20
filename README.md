# BookingHub - Salon Booking Application

A modern salon booking application with Google authentication, admin panel, and comprehensive booking management system.

## Features

### 🔐 Authentication
- Google Sign-In integration
- Secure JWT token-based authentication
- User role management (Customer, Admin)

### 👨‍💼 Admin Panel
- Add new admins via email ID
- Admin dashboard with role-based access
- Manage salon services and time slots

### 📅 Booking Management
- View all bookings with filters
- Booking status tracking (pending, confirmed, completed, cancelled)
- Customer appointment history
- Service selection and time slot booking

### 💄 Salon Services
- Multiple service categories
- Service pricing and duration
- Real-time availability

## Project Structure

```
BookingHub/
├── frontend/                 # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Auth context
│   │   ├── utils/           # Utility functions
│   │   └── App.js
│   └── package.json
├── backend/                  # Node.js/Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── middleware/          # Auth & other middleware
│   ├── config/              # Configuration files
│   ├── server.js
│   └── package.json
└── README.md
```

## Tech Stack

### Frontend
- React.js
- React Router
- Axios for API calls
- Google Sign-In SDK
- Tailwind CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Google OAuth 2.0

## Installation

1. Clone the repository
```bash
git clone https://github.com/rajeshnagaraj86-dev/BookingHub.git
cd BookingHub
```

2. Install all dependencies
```bash
npm run install-all
```

3. Set up environment variables
```bash
# Backend .env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PORT=5000

# Frontend .env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## Running the Application

```bash
npm run dev
```

This will start both the frontend (port 3000) and backend (port 5000) concurrently.

## API Endpoints

### Authentication
- `POST /api/auth/google` - Google authentication
- `POST /api/auth/logout` - User logout

### Admin Management
- `GET /api/admin/admins` - Get all admins (Admin only)
- `POST /api/admin/add-admin` - Add new admin (Admin only)
- `DELETE /api/admin/remove-admin/:id` - Remove admin (Admin only)

### Bookings
- `GET /api/bookings` - Get all bookings (Admin) / User bookings (Customer)
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status (Admin)
- `DELETE /api/bookings/:id` - Cancel booking

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (Admin)
- `PUT /api/services/:id` - Update service (Admin)
- `DELETE /api/services/:id` - Delete service (Admin)

### Time Slots
- `GET /api/slots/:serviceId` - Get available slots
- `POST /api/slots` - Create slot (Admin)

## Usage

### For Customers
1. Sign in with Google account
2. Browse available services
3. Select date and time slots
4. Complete booking
5. View booking history

### For Admins
1. Sign in with admin account (Google)
2. Access admin panel
3. Add new admins via email
4. View all customer bookings
5. Update booking status
6. Manage salon services and time slots

## Environment Setup

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs
6. Copy Client ID and Secret

### MongoDB Setup
1. Create MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Add to environment variables

## License

MIT License - feel free to use this project for your own purposes

## Support

For support, email support@bookinghub.com or open an issue in the repository.