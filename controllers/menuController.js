const { Categorie } = require('../models');

exports.getMenu = async (req, res) => {
    try {
        const categories = await Categorie.findAll({
            attributes: ['id_categorie', 'nom'],
        });
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' , error: err.message });
    }
};