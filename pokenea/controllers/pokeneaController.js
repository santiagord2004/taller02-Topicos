// controllers/pokeneaController.js
const pokeneaModel = require('../models/pokeneaModel');
const os = require('os'); 

/**
 * Retrieves information of a random Pokenea.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function getPokeneaInfo(req, res) {
  try {
    const pokenea = pokeneaModel.getRandomPokenea();
    const containerId = os.hostname(); 
    const response = {
      id: pokenea.id,
      nombre: pokenea.nombre,
      altura: pokenea.altura,
      habilidad: pokenea.habilidad,
      containerId: containerId
    };
    res.json(response);
  } catch (error) {
    console.error("Error in getPokeneaInfo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

/**
 * Retrieves the image and philosophical phrase of a random Pokenea.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function getPokeneaImageAndPhrase(req, res) {
  try {
    const pokenea = pokeneaModel.getRandomPokenea();
    const containerId = os.hostname();
    const response = {
      imagen: pokenea.imagen,
      fraseFilosofica: pokenea.fraseFilosofica,
      containerId: containerId
    };
    res.json(response);
  } catch (error) {
    console.error("Error in getPokeneaImageAndPhrase:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getPokeneaInfo,
  getPokeneaImageAndPhrase
};