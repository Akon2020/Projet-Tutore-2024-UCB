```markdown
# Public Safety Incident Management System

This project is a public safety incident management system designed to allow users to report incidents, and for patrol teams to manage, track, and resolve these incidents. The system supports roles-based access control and real-time notifications via Firebase.

## Features

- **User roles:**
  - Regular users can report incidents.
  - Patrol users can take responsibility for incidents and resolve them.
  - Admins can manage patrol teams and incidents.
  - Super Admins have full control over the system.
  
- **Incident Reporting:**
  - Users can report incidents with location data and upload images.
  - Patrol teams can take over incidents and mark them as resolved.
  
- **Notifications:**
  - Real-time push notifications for all users.
  - Patrol users receive location and incident details.
  
- **Map Integration:**
  - Incidents are geolocated and displayed on a map using Mapbox.
  
- **Incident Status Tracking:**
  - Track incidents by their status: Help, In Progress, Resolved.

## Tech Stack

- **Backend:**
  - Node.js with Express.js
  - MySQL for data storage
  - Firebase for notifications
  - JWT for authentication

- **Frontend:**
  - React.js for web interface
  - React Native for mobile app

- **Other Tools:**
  - Mapbox for map and geolocation
  - Cloudinary (or local storage) for image handling
  - Firebase for push notifications

## Project Structure

```
project-root/
│
├── controllers/
│   ├── authController.js
│   ├── incidentController.js
│   └── patrolController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── rolesMiddleware.js
│   ├── uploadMiddleware.js
│   └── validators.js
│
├── models/
│   ├── User.js
│   ├── Incident.js
│   └── Patrol.js
│
├── routes/
│   ├── authRoutes.js
│   ├── incidentRoutes.js
│   └── patrolRoutes.js
│
├── services/
│   ├── firebaseService.js
│   └── notificationService.js
│
├── config/
│   └── db.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** (for database)
- **Firebase account** (for push notifications)
- **Mapbox account** (for map and geolocation)

### Step-by-Step Setup

1. Clone the repository:

```bash
git clone https://github.com/Akon2020/Projet-Tutore-2024-UCB.git
cd Projet-Tutore-2024-UCB
```

2. Install the dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file in the root directory and add the following:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=incident_db
JWT_SECRET=your_jwt_secret
FIREBASE_CONFIG=your_firebase_config
```

4. Set up MySQL database:

Create the necessary tables in MySQL by running the following commands:

```sql
CREATE DATABASE IF NOT EXISTS securityapp;

USE securityapp;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(191) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'patrol', 'admin', 'superadmin') DEFAULT 'user',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    patrolUserId INT DEFAULT NULL,
    status ENUM('help', 'en cours de traitement', 'résolu') DEFAULT 'help',
    imagePath VARCHAR(255),
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (patrolUserId) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE patrols (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    location VARCHAR(255),
    adminId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (adminId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE patrol_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    patrolId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (patrolId) REFERENCES patrols(id) ON DELETE CASCADE
) ENGINE=InnoDB;

```

5. Start the application:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - User login

### Incident Management

- **POST /api/incidents** - Report a new incident (requires authentication)
- **GET /api/incidents** - Get a list of all incidents
- **PATCH /api/incidents/:incidentId/take** - Take responsibility for an incident (Patrol only)
- **PATCH /api/incidents/:incidentId/resolve** - Resolve an incident (Patrol only)

### Patrol Management

- **POST /api/patrols** - Create a new patrol (Admin only)
- **GET /api/patrols** - Get a list of all patrols

## Data Validation

The project includes robust validation for incoming data using `express-validator`. Validation rules are defined in the `middleware/validators.js` file.

### Example Validation Rules

- User Registration: Name, email, and password fields must be provided.
- Incident Creation: Latitude and longitude must be valid coordinates.

## Security

- **JWT Authentication**: JSON Web Tokens are used for securing the API. All protected routes require a valid token.
- **Role-Based Access Control**: Different levels of access are provided based on user roles (`user`, `patrol`, `admin`, `super_admin`).

## Firebase Push Notifications

The system is integrated with Firebase Cloud Messaging to send real-time notifications to patrol members when incidents are reported. Notifications include the incident location and a map link for navigation.

## Mapbox Integration

Mapbox is used to display the location of incidents on a map. Users can view the map and see the real-time position of incidents.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Explication du contenu :

- **Project Overview** : Une description générale du projet et ses fonctionnalités.
- **Tech Stack** : Les technologies utilisées.
- **Project Structure** : La structure du projet avec ses différents dossiers.
- **Installation** : Les étapes pour configurer l'application sur ton ordinateur.
- **API Endpoints** : Les endpoints de l'API avec leurs descriptions.
- **Data Validation & Security** : Comment les données sont validées et sécurisées.
- **Notifications & Mapbox** : Intégration de Firebase pour les notifications et Mapbox pour la géolocalisation.
- **Contribution & License** : Comment contribuer au projet et la licence utilisée.

Ce README.md sera en train d'être modifier au fur et à mesure que nous avançons dans le projet
