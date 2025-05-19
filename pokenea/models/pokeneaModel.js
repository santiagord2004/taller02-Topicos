// models/pokeneaModel.js
/**
 * id: int - Contains the pokenea's identification (ID)
 * nombre: string - Contains the pokenea's name 
 * altura: number  - Contains the pokenea's high
 * habilidad: string - Contains the pokenea´s hability
 * imagen: string  - Contains the pokenea's image
 * fraseFilosofica: string - Contains the phrase 
 * Array of Pokeneas objects.
 */
const pokeneas = [
    {
      id: 1,
      nombre: "Pokenea Andino",
      altura: 0.5,
      habilidad: "Trepar",
      imagen: "url_de_s3/andino.jpg",
      fraseFilosofica: "La montaña más alta comienza con un pequeño paso."
    },
    {
      id: 2,
      nombre: "Pokenea Cafetero",
      altura: 0.8,
      habilidad: "Cosechar",
      imagen: "url_de_s3/cafetero.jpg",
      fraseFilosofica: "El grano de café es pequeño, pero su sabor es inmenso."
    },
    {
      id: 3,
      nombre: "Pokenea Arriero",
      altura: 1.0,
      habilidad: "Cargar",
      imagen: "url_de_s3/arriero.jpg",
      fraseFilosofica: "El camino es largo, pero la compañía lo hace corto."
    },
    {
      id: 4,
      nombre: "Pokenea Paisa",
      altura: 1.2,
      habilidad: "Comerciar",
      imagen: "url_de_s3/paisa.jpg",
      fraseFilosofica: "El que no arriesga, no gana."
    },
    {
      id: 5,
      nombre: "Pokenea Silletero",
      altura: 1.5,
      habilidad: "Florecer",
      imagen: "url_de_s3/silletero.jpg",
      fraseFilosofica: "La belleza está en todas partes, solo hay que saberla ver."
    },
    {
      id: 6,
      nombre: "Pokenea Minero",
      altura: 0.9,
      habilidad: "Extraer",
      imagen: "url_de_s3/minero.jpg",
      fraseFilosofica: "El tesoro más grande está en el interior."
    },
    {
      id: 7,
      nombre: "Pokenea Ciclista",
      altura: 0.6,
      habilidad: "Pedalear",
      imagen: "url_de_s3/ciclista.jpg",
      fraseFilosofica: "El camino es la meta."
    }
  ];
  
  /**
   * Retrieves a random Pokenea from the pokeneas array.
   */
  function getRandomPokenea() {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
  }
  
  module.exports = {
    getRandomPokenea
  };