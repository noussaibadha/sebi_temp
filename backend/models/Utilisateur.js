const mongoose = require("mongoose");

const utilisateurSchema = new mongoose.Schema({
<<<<<<< HEAD
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    avatar: { type: String, required: true },
    dateDeNaissance: { type: Date, required: true },
    estVerifie: { type: Boolean, default: false },
    verificationToken: { type: String },
    role: {
        type: String,
        enum: ["utilisateur", "admin"],
        default: "utilisateur",
    },
}, { timestamps: true });

module.exports = mongoose.model("Utilisateur", utilisateurSchema);
=======
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    age: { type: Number, required: false },
    email: { type: String, required: false, unique: true },
    motDePasse: { type: String, required: true },
    avatar: { type: String, default: "default-avatar.png" },
}, { timestamps: true });

module.exports = mongoose.model("Utilisateur", utilisateurSchema);
>>>>>>> celia/branch_celia
