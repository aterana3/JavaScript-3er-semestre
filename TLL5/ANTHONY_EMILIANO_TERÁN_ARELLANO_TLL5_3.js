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
//node ANTHONY_EMILIANO_TERÁN_ARELLANO_TLL5_3.js

const fs = require('fs');
const prompt = require('prompt-sync')();

// Crear el archivo junto con la ruta
const archivo = "./archivos/Archivo190523_03.txt";

// Preguntar si existe el archivo
fs.access(archivo, (err) => {
    if (!err) {
        // Si existe, lo abro y leo
        fs.readFile(archivo, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    } else {
        // Si no existe, preguntar si se desea crear
        let Lv_control = "";
        Lv_control = prompt("El archivo no existe, ¿Desea crearlo S/N? ").toUpperCase();
        if (Lv_control === "S") {
            console.log("Creando archivo...");
            const contenido = "Esta es mi primera línea de mi primer archivo.\n" +
                "Esta es mi segunda línea de mi primer archivo.\n" +
                "Esta es mi tercera línea de mi primer archivo.\n";

            // Crear el archivo
            fs.writeFile(archivo, contenido, 'utf-8', (err) => {
                if (err) throw err;
                console.log("El archivo ha sido creado con éxito.");
            });
        } else if (Lv_control === "N") {
            console.log("Has negado la creación del archivo, Proceso terminado");
        } else {
            console.log("Has colocado una opción inválida");
        }
    }
});