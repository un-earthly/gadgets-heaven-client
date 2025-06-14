# Gadgets Heaven Server

This is the backend server for the Gadgets Heaven e-commerce platform, built with NestJS and TypeScript.

## Features

- User Authentication (JWT)
- User Management
- Role-based Access Control
- RESTful API
- Swagger Documentation
- PostgreSQL Database
- TypeORM Integration

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gadgets-heaven-server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=gadgets_heaven

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRATION=1d

# Server Configuration
PORT=3001
NODE_ENV=development
```

4. Start PostgreSQL and create the database:
```bash
createdb gadgets_heaven
```

## Running the Application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:
```
http://localhost:3001/api
```

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Project Structure

```
src/
├── modules/
│   ├── auth/           # Authentication module
│   │   ├── guards/
│   │   ├── strategies/
│   │   └── ...
│   └── users/          # Users module
├── app.module.ts       # Main application module
├── main.ts            # Application entry point
└── ...
```

## API Endpoints

### Authentication
- POST /auth/register - Register a new user
- POST /auth/login - Login user

### Users
- GET /users - Get all users (protected)
- GET /users/:id - Get user by ID (protected)
- PUT /users/:id - Update user (protected)
- DELETE /users/:id - Delete user (protected)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
