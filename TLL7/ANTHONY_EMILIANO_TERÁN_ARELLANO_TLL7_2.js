// Importamops el metodos de la libreria fs
const fs = require('fs');

// Definimos la ruta completa de la carpeta a crear en la unidad C
const Lf_ruta = "C:/System_VideoClub"

// Usamos la excepción - Intentar crear la carpeta
// mkdirSync se utiliza para crear la carpeta
try {
  fs.mkdirSync(Lf_ruta);  //El metodo fs.mkdirSync se utiliza para crear un nuevo directorio (carpeta)
  console.log("Carpeta creada exitosamente");
} catch (error) {
  console.log(`No se pudo crear la carpeta: ${error.message}`);
}