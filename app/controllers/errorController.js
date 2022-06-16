//~ IMPORTATION DES MODULES
import { errorHandling } from '../services/errorHandling.js';

//~ ERRORS CONTROLLERS

function _400(req, res) {
  res.status(400).json('Mauvaise requête');
}

function _404(req, res) {
  res.status(404).json({ 'Error 404': 'Page Not Found' });
}

function _500(err, req, res) {
  errorHandling.manage(err, req, res);
  res.status(500).json({ 'Error 500': err.message });
}

export { _400, _404, _500 };
