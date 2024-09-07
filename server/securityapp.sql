CREATE DATABASE IF NOT EXISTS securityapp;

USE securityapp;

-- Table pour les utilisateurs
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'patrol', 'admin', 'superadmin') DEFAULT 'user',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les incidents
CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    patrolUserId INT DEFAULT NULL,
    status ENUM('help', 'en cours de traitement', 'résolu') DEFAULT 'help',
    imagePath VARCHAR(255),
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (patrolUserId) REFERENCES users(id)
);

-- Table pour les patrouilles
CREATE TABLE patrols (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    location VARCHAR(255),
    adminId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (adminId) REFERENCES users(id)
);

-- Table pour les candidatures à une patrouille
CREATE TABLE patrol_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    patrolId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (patrolId) REFERENCES patrols(id)
);
