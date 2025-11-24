# 🍬 Carambar & Co - API

API RESTful développée dans le cadre d'un test technique de sélection CDA.
Cette application permet de gérer et de distribuer des blagues Carambar via une interface standardisée.

## 🛠️ Stack Technique

- Serveur : Node.js, Express
- Base de données : SQLite (fichier local)
- ORM : Sequelize
- Validation : Joi
- Documentation : Swagger UI

 ## 🚀 Installation et Lancement

1. Installer les dépendances

```bash
npm install
```

2. Initialiser la Base de Données : cette commande crée les tables et insère 10 blagues de base.

```bash
npm run db:reset
```

3. Démarrer le serveur

```bash
npm run dev
```

Le serveur se lancera par défaut sur le port 3001.

## 📚 Documentation (Swagger)

L'API est entièrement documentée via Swagger UI.

- En ligne (Render) :  https://carambar-api-1lrv.onrender.com/api-docs
- En local (après démarrage) : http://localhost:3001/api-docs

### 🔗 Liens Utiles

- Repository Frontend : https://github.com/MathieuBourasseau/carambar-front
- Site en ligne : https://mathieubourasseau.github.io/carambar-front/ 