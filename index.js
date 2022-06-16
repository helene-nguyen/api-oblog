//~ENVIRONNEMENT
import 'dotenv/config';

//~IMPORT DES MODULES
import express from 'express';
const app = express();

import { router } from './app/routes/index.js';
import { _404 } from './app/controllers/errorController.js';

// //~MISE EN PLACE DE SWAGGER POUR LA DOC
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { options } from './app/utils/swaggerDocs.js';

expressJSDocSwagger(app)(options);

//~PROTECTION DE NOTRE API
import helmet from 'helmet';
app.use(helmet());

//~ENCODAGE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//~AUTORISATION DES CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  next();
});

//~ROUTE
app.use(router);

//~ERROR
app.use(_404);

//~LANCEMENT DU SERVEUR
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
   console.log(`\x1b[1;33m\u26a1Running server on : http://localhost:${PORT} \u26a1\x1b[0m`);
});