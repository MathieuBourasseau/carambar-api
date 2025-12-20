# 🍬 Carambar & Co - API

API RESTful développée dans le cadre d'un test technique de sélection CDA.
Cette application permet de gérer et de distribuer des blagues Carambar via une interface standardisée.

## 🛠️ Stack Technique

- Serveur : Node.js, Express
- Base de données : 
    - Développement: SQLite (fichier local)
    - Production : PostgreSQL (via Neon Tech)
- ORM : Sequelize
- Validation : Joi
- Documentation : Swagger UI
- Déploiement : Render (Back) & Vercel (Front)

 ## 🚀 Installation et Lancement

1. Installer les dépendances

```bash
npm install
```

2. Initialiser la Base de Données : cette commande crée les tables et insère 10 blagues de base.

```bash
node init_db.js
```

3. Démarrer le serveur

```bash
npm run dev
```

Le serveur se lancera par défaut sur le port 3000.

## 📦 Architecture de Déploiement (Render)
Le projet est configuré pour un déploiement continu sur Render.

- Start Command : node init_db.js && node index.js (Ceci assure que la base de données PostgreSQL est toujours synchronisée et remplie avant que le serveur ne démarre).
- Variables d'environnement : Le projet bascule automatiquement sur PostgreSQL lorsqu'il détecte la variable PG_URL.

## 📚 Documentation (Swagger)

L'API est entièrement documentée via Swagger UI.

- En ligne (Render) :  https://carambar-api-1lrv.onrender.com/api-docs
- En local (après démarrage) : http://localhost:3000/api-docs

### 🔗 Liens Utiles

- Repository Frontend : https://github.com/MathieuBourasseau/carambar-front
- Site en ligne : https://mathieubourasseau.github.io/carambar-front/ 

⚠️ Note importante (Cold Start) : Le backend étant hébergé sur l'offre gratuite de Render, le serveur se met en veille après une période d'inactivité. Par conséquent, la première requête peut prendre jusqu'à 3 minutes le temps que le serveur redémarre ("Cold Start"). Si rien ne se passe au premier clic, merci de patienter quelques instants, les requêtes suivantes seront instantanées.