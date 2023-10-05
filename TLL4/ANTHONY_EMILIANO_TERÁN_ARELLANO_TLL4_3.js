// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = '' number
// Lf = '' float
// Ld = '' decimal
// Fl = '' archivo

// Gv = Variable global Varchar - Caracter
// Gn = '' number
// Gf = '' float
// Gd = '' decimal


//Este codigo se repite porque no hay otras formas.
const fs = require('fs');

// Crear un archivo en TXT

const Lv_lineas = "Esta es mi primera línea de mi primer archivo.\n" +
                  "Esta es mi segunda línea de mi primer archivo.\n" +
                  "Esta es mi tercera línea de mi primer archivo.\n";

fs.writeFile('Archivo170523_03.txt', Lv_lineas, 'utf-8', (err) => {
    if (err) console.log("Error al crear el archivo!");
    console.log("Su segundo archivo ha sido creado. ¡Felicidades!");
});
