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

