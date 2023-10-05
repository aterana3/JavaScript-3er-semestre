// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = '' number
// Lf = '' float
// Ld = '' decimal
// Lb = '' boolean
// Fl = '' archivo

// Gv = Variable global Varchar - Caracter
// Gn = '' number
// Gf = '' float
// Gd = '' decimal
// Gb = '' boolean

// Manejo de las rutas
// En js, no necesitamos el módulo `pathlib` como en Python aca usamos las librerias de Node.Js.

//Para ejecutar esto se debe de abrir por medio de terminal de Node
//cd D:\Documents\VisualStudioCode\JavaScript\TLL5
//node ANTHONY_EMILIANO_TERÁN_ARELLANO_TLL5_2.js

const fs = require('fs');

// Crear el archivo junto con la ruta
const archivo = "./archivos/Archivo190523_02.txt";

// Escribir el lineas
const lineas = "Esta es mi primera línea de mi primer archivo.\n" +
                "Esta es mi segunda línea de mi primer archivo.\n" +
                "Esta es mi tercera línea de mi primer archivo.\n";

// Cargar todo en el archivo - Transferir información al archivo
fs.writeFile(archivo, lineas, 'utf-8', (err) => {
    if (err) throw err;
    console.log("Su cuarto archivo ha sido creado. ¡Felicidades!");
});
