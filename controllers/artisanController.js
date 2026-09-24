const { Op } = require('sequelize');
const { Artisan, Specialite, Categorie } = require('../models');

// GET /api/artisans?categorie=Alimentation&recherche=dumont
exports.getArtisans = async (req, res) => {
    try {
        const { categorie, recherche } = req.query;

        const where = {};
        if (recherche) {
            where.nom = { [Op.like]: `%${recherche}%` };
        }

        const include = {
            model: Specialite,
            required: Boolean(categorie),
            include: {
                model: Categorie,
                ...(categorie && { where: { nom: categorie }, required: true }),
            },
        };

        const artisans = await Artisan.findAll({ where, include });
        res.json(artisans);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// GET /api/artisans/top -> les artisans du mois
exports.getArtisansTop = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { top: true },
            include: { model: Specialite, include: Categorie },
        });
        res.json(artisans);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// GET /api/artisans/:id -> fiche artisan complète
exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: { model: Specialite, include: Categorie },
        });
        if (!artisan) {
            return res.status(404).json({ message: 'Artisan introuvable' });
        }
        res.json(artisan);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};