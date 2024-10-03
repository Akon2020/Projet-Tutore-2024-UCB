CREATE DATABASE IF NOT EXISTS securityapp;

USE securityapp;

CREATE TABLE Utilisateur (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    post_nom VARCHAR(50),
    date_naissance DATE,
    sexe CHAR(1),
    numero_tel VARCHAR(15),
    email VARCHAR(100),
    identite_nationale VARCHAR(20),
    mot_de_passe VARCHAR(255),
    type_utilisateur ENUM('simple', 'admin', 'simple-admin', 'super-admin') DEFAULT 'simple'
) ENGINE=InnoDB;

CREATE TABLE Incident (
    id_incident INT AUTO_INCREMENT PRIMARY KEY,
    type_incident ENUM('vol', 'agression', 'accident', 'autre'),
    description TEXT,
    date_heure DATETIME,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    id_utilisateur INT,
    statut ENUM('traite', 'en_cours', 'non_traite') DEFAULT 'non_traite',
    id_admin INT,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE,
    FOREIGN KEY (id_admin) REFERENCES Utilisateur(id_utilisateur) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE Alerte (
    id_alerte INT AUTO_INCREMENT PRIMARY KEY,
    type_alerte ENUM('incendie', 'inondation', 'crime', 'catastrophe_naturelle'),
    message TEXT,
    date_heure DATETIME,
    region VARCHAR(100),
    id_admin INT,
    urgence ENUM('elevé', 'modéré', 'faible'),
    FOREIGN KEY (id_admin) REFERENCES Utilisateur(id_utilisateur) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE Actualite (
    id_actualite INT AUTO_INCREMENT PRIMARY KEY,
    type_actualite ENUM('conseil', 'mise_a_jour', 'mesure_a_prendre'),
    message TEXT,
    date_heure DATETIME,
    image VARCHAR(255),
    id_admin INT,
    region VARCHAR(100),
    FOREIGN KEY (id_admin) REFERENCES Utilisateur(id_utilisateur) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE Commentaire (
    id_commentaire INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT,
    date_heure DATETIME,
    id_actualite INT,
    id_utilisateur INT,
    FOREIGN KEY (id_actualite) REFERENCES Actualite(id_actualite) ON DELETE CASCADE,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Patrouille (
    id_patrouille INT AUTO_INCREMENT PRIMARY KEY,
    date_heure_debut DATETIME,
    date_heure_fin DATETIME,
    zone_couverte VARCHAR(100),
    id_equipe INT,
    id_admin INT,
    FOREIGN KEY (id_equipe) REFERENCES Utilisateur(id_utilisateur) ON DELETE SET NULL,
    FOREIGN KEY (id_admin) REFERENCES Utilisateur(id_utilisateur) ON DELETE SET NULL
) ENGINE=InnoDB;
