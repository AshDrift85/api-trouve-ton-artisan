const transporter = require('../config/mailer');
const { Artisan } = require('../models');

// POST /api/artisans/:id/contact
exports.envoyerContact = async (req, res) => {
    try {
        const { nom, email, objet, message } = req.body;

        if (!nom || !email || !objet || !message) {
            return res.status(400).json({ message: 'Tous les champs sont obligatoire.' });
        }

        const artisan = await Artisan.findByPk(req.params.id);
        if (!artisan) {
            return res.status(404).json({ message: 'Artisan introuvable.' });
        }

        await transporter.sendMail({
            from: `"${nom}" <${email}>`,
            to: artisan.email,
            subject: objet,
            text: message,
        });

        res.status(200).json({ message: 'Message envoye avec succes.' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi', error: err.message });
    }
};