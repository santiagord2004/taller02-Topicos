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
      nombre: "El zarco",
      altura: 0.5,
      habilidad: "Trepar",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/el_zarco.jpg",
      fraseFilosofica: "La montaña más alta comienza con un pequeño paso."
    },
    {
      id: 2,
      nombre: "Bulbaliendra",
      altura: 0.8,
      habilidad: "Cosechar",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/elvisbulbasur.png",
      fraseFilosofica: "El grano de café es pequeño, pero su sabor es inmenso."
    },
    {
      id: 3,
      nombre: "El Arriero",
      altura: 1.0,
      habilidad: "Cargar",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/Arriero.jpg",
      fraseFilosofica: "El camino es largo, pero la compañía lo hace corto."
    },
    {
      id: 4,
      nombre: "Bayronmander",
      altura: 1.2,
      habilidad: "Comerciar",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/Bayronmander.png",
      fraseFilosofica: "El que no arriesga, no gana."
    },
    {
      id: 5,
      nombre: "Fuecoco Zapata",
      altura: 1.5,
      habilidad: "Florecer",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/fuecoco+zapata.jpg",
      fraseFilosofica: "La belleza está en todas partes, solo hay que saberla ver."
    },
    {
      id: 6,
      nombre: "Brayan Squirtle",
      altura: 0.9,
      habilidad: "Extraer",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/Brayan+Squirtle.png",
      fraseFilosofica: "El tesoro más grande está en el interior."
    },
    {
      id: 7,
      nombre: "Pikanea",
      altura: 0.6,
      habilidad: "Pedalear",
      imagen: "https://pokenea-sr.s3.us-east-1.amazonaws.com/Pikanea.jpg",
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
