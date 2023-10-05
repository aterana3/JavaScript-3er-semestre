// Anthony Terán Arellano - 3er Semestre

// Manejo de las rutas - Funciones
// En js, no necesitamos el módulo `pathlib` como en Python aca usamos las librerias de Node.Js.

//Para ejecutar esto se debe de abrir por medio de terminal de Node
//cd D:\Documents\VisualStudioCode\JavaScript\TLL5
//node ANTHONY_EMILIANO_TERÁN_ARELLANO_TLL5_1.js

const path = require('path');
const fs = require('fs');

// Creamos el archivo junto con la ruta
const archivo = "./archivos/Archivo190523_01.txt";

// Obtener la ruta general
const rutaPadre = path.dirname(archivo);
console.log(`La ruta general del archivo es: ${rutaPadre}`);

// Verificar que existe la ruta
const existe = fs.existsSync(path.dirname(archivo));
console.log(`¿La ruta existe? ${existe}`);


// Obtener el nombre del archivo
const nombreArchivo = path.basename(archivo);
console.log(`El nombre del archivo es: ${nombreArchivo}`);

// Obtener la ruta Padre/Raiz/Root
const rutaRaiz = path.dirname(archivo);
console.log(`El nombre del directorio raíz es: ${rutaRaiz}`);