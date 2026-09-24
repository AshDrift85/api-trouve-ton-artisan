const sequelize = require('../config/database');
const Categorie = require('./categorie');
const Specialite = require('./specialite');
const Artisan = require('./artisan');

// Une Categorie a plusieurs Specialite / une Specialite appartient à une Categorie
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie' });
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie'});

// Une Specialite a plusieurs Artisan / un Artisan appartient à une Specialite
Specialite.hasMany(Artisan, { foreignKey: 'id_specialite'});
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite'});

module.exports = { sequelize, Categorie, Specialite, Artisan };