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
// Fg = '' archivo

// Manejo de las rutas
// En js, no necesitamos el módulo `pathlib` como en Python aca usamos las librerias de Node.Js.

//Para ejecutar esto se debe de abrir por medio de terminal de Node
//cd D:\Documents\VisualStudioCode\JavaScript\TLL5
//node ANTHONY_EMILIANO_TERÁN_ARELLANO_TLL5_4.js

const fs = require('fs');
const path = require('path');


// Crear el archivo junto con la ruta
const archivo = "./archivos/Archivo190523_04.txt";

// Combinar funciones y procesos
// 1.- Preguntar si existe la ruta

const existeRutaPadre = fs.existsSync(path.dirname(archivo));

if (existeRutaPadre) {
    const existeArchivo = fs.existsSync(archivo);
    if (existeArchivo) {
        // Si existe el archivo, lo abro y leo
        fs.readFile(archivo, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    } else {
        // Si no existe el archivo, se crea el archivo
        const contenido = "Esta es mi primera línea de mi primer archivo.\n" +
            "Esta es mi segunda línea de mi primer archivo.\n" +
            "Esta es mi tercera línea de mi primer archivo.\n";

        // Crear el archivo
        fs.writeFile(archivo, contenido, 'utf-8', (err) => {
            if (err) throw err;
            console.log("El archivo ha sido creado con éxito.");
        });
    }
} else {
    // Si no existe la ruta, se muestra un mensaje de código de error.
    console.log("Codigo 035 - La ruta especificada no existe, contacte a la área de sistemas.");
}