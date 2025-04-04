# The Whole Truth Behind Lifts

A modern MERN stack application built with TypeScript, React, Express, and MongoDB, focusing on evidence-based strength training and movement science education.

## Features

- 🎨 Modern, responsive UI with dark mode support
- 📱 Mobile-first design
- 🔄 Real-time dark/light mode switching
- 🚀 Fast development with Vite
- 📚 Comprehensive course and resource management
- 👥 Community features
- 🎯 Progress tracking

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Chakra UI for component library
- React Router for navigation
- React Icons for iconography
- Axios for API calls

### Backend
- Node.js with TypeScript
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled

## Prerequisites

- Node.js 18.x
- npm or yarn
- MongoDB (local or Atlas)

## Project Structure

```
.
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── utils/      # Utility functions
│   │   └── types/      # TypeScript type definitions
│   └── public/         # Static assets
│
├── server/           # Express backend
│   ├── src/
│   │   ├── controllers/ # Route controllers
│   │   ├── models/      # Database models
│   │   ├── routes/      # API routes
│   │   ├── middleware/  # Custom middleware
│   │   └── utils/       # Utility functions
│   └── config/          # Configuration files
│
└── package.json      # Root package.json (monorepo)
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com-personal/webdev1903/TheWholeTruthBehindLifts.git
cd TheWholeTruthBehindLifts
```

2. Install dependencies:
```bash
npm run install:all
```

3. Create a `.env` file in the server directory:
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:5000`

## Development

- Frontend development: `npm run start:client`
- Backend development: `npm run start:server`
- Build for production: `npm run build`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by The Movement System
- Built with modern web technologies
- Community-driven development 