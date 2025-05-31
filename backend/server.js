const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connecterDB = require("./config/database");
<<<<<<< HEAD
const scoreRoutes = require("./backend/routes/scoreRoutes");

=======
>>>>>>> celia/branch_celia

// Charger les variables d'environnement
dotenv.config();

// Connecter à la base de données
connecterDB();
<<<<<<< HEAD
=======

>>>>>>> celia/branch_celia
// Créer une instance d'Express
const app = express();

// Middleware CORS et parsing JSON
app.use(cors());
<<<<<<< HEAD

app.use(bodyParser.json());
app.use(express.json()); 

// Serveur API
app.use("/api/utilisateurs", require("./routes/utilisateurRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/verification", require("./routes/utilisateurRoutes"));
app.use("/api/tous", require("./routes/utilisateurRoutes"));
=======
app.use(bodyParser.json());

// Serveur API
app.use("/api/utilisateurs", require("./routes/utilisateurRoutes"));

>>>>>>> celia/branch_celia
// Servir les fichiers statiques du build React
if (process.env.NODE_ENV === "production") {
  // Serve les fichiers du dossier 'build' généré par React
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Redirige toutes les requêtes vers 'index.html' (pour gérer la navigation côté client)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

<<<<<<< HEAD
app.use("/api/scores", scoreRoutes);

=======
>>>>>>> celia/branch_celia
// Démarrer le serveur
app.listen(process.env.PORT, () => console.log("Serveur démarré sur le port 8008 : http://localhost:8008/"));
