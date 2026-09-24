-- ============================================================
-- Trouve ton artisan - Script de création de la base de données
-- ============================================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- Table CATEGORIE
CREATE TABLE categorie (
  id_categorie INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Table SPECIALITE
CREATE TABLE specialite (
  id_specialite INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  id_categorie INT NOT NULL,
  CONSTRAINT fk_specialite_categorie
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Table ARTISAN
CREATE TABLE artisan (
  id_artisan INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) NOT NULL DEFAULT 0.0 CHECK (note BETWEEN 0 AND 5),
  ville VARCHAR(100) NOT NULL,
  a_propos TEXT,
  email VARCHAR(150) NOT NULL,
  site_web VARCHAR(255),
  top BOOLEAN NOT NULL DEFAULT FALSE,
  id_specialite INT NOT NULL,
  CONSTRAINT fk_artisan_specialite
    FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE INDEX idx_artisan_nom ON artisan(nom);
CREATE INDEX idx_specialite_categorie ON specialite(id_categorie);