require('dotenv').config();
const { sequelize, Artisan, Specialite, Categorie } = require('./models');

sequelize
  .authenticate()
  .then(async () => {
    console.log('Connexion réussie.');

    const artisans = await Artisan.findAll({
      include: { model: Specialite, include: Categorie },
    });

    console.log(`Nombre d'artisans trouvés : ${artisans.length}`);
    console.log('Exemple :', artisans[0].nom, '-', artisans[0].Specialite.nom, '-', artisans[0].Specialite.Categorie.nom);

    process.exit(0);
  })
  .catch((err) => {
    console.error('Erreur :', err.message);
    process.exit(1);
  });