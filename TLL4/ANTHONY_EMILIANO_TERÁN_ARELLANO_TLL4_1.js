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

const fs = require('fs');

// Crear un archivo en TXT
// Escribir líneas en el archivo
const Lv_lineas = "Esta es mi primera línea de mi primer archivo.\n" +
                  "Esta es mi segunda línea de mi primer archivo.\n" +
                  "Esta es mi tercera línea de mi primer archivo.\n";
fs.writeFileSync('Archivo170523_01.txt', Lv_lineas, 'utf-8');
console.log("Su primer archivo ha sido creado. ¡Felicidades!");