# Trouve ton artisan — API

API REST (Node.js / Express / Sequelize / MySQL) pour la plateforme "Trouve ton artisan", région Auvergne-Rhône-Alpes.

## Prérequis

- Node.js (v18 ou supérieur)
- npm
- Un serveur MySQL/MariaDB (ex. via MAMP)

## Installation

1. Cloner le dépôt :
```bash
   git clone https://github.com/AshDrift85/api-trouve-ton-artisan.git
   cd api-trouve-ton-artisan
```

2. Installer les dépendances :
```bash
   npm install
```

3. Créer un fichier `.env` à la racine avec les variables suivantes :
```
   DB_HOST=127.0.0.1
   DB_PORT=8889
   DB_NAME=trouve_ton_artisan
   DB_USER=root
   DB_PASSWORD=root
   DB_DIALECT=mysql
   PORT=3000
   ALLOWED_ORIGIN=http://localhost:5173
   MAIL_HOST=sandbox.smtp.mailtrap.io
   MAIL_PORT=2525
   MAIL_USER=votre_user_mailtrap
   MAIL_PASS=votre_pass_mailtrap
```

4. Créer et alimenter la base de données à partir des scripts SQL du dossier `sql/` :
```bash
   mysql -u root -p < sql/create_database.sql
   mysql -u root -p < sql/seed_database.sql
```

## Lancement

```bash
npm run dev
```

L'API est accessible sur `http://localhost:3000`.

## Routes principales

- `GET /api/menu` — liste des catégories
- `GET /api/artisans` — liste des artisans (filtres `?categorie=` et `?recherche=`)
- `GET /api/artisans/top` — artisans du mois
- `GET /api/artisans/:id` — détail d'un artisan
- `POST /api/artisans/:id/contact` — envoi d'un message à un artisan

## Déploiement

- **API** hébergée sur [Render](https://render.com) : https://api-trouve-ton-artisan-z323.onrender.com
- **Base de données** MySQL hébergée sur [Railway](https://railway.app)