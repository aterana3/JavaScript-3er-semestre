// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = '' number
// Lf = '' float
// Ld = '' decimal

// Gv = Variable global Varchar - Caracter
// Gn = '' number
// Gf = '' float
// Gd = '' decimal

//Para ejecutar esto se debe de abrir por medio de terminal de Node
//cd D:\Documents\VisualStudioCode\JavaScript\TLL3
//node ANTHONY_EMILIANO_TERÁN_ARELLANO_TLL3_2.js


const ingresar = require('prompt-sync')();

// Ingresar un valor por teclado, terminar el programa cuando sea 0
console.log("Ingrese un valor por teclado, terminará el programa cuando sea 0");
let Lv_valor = ingresar("Ingrese un valor por teclado: ")

while(Lv_valor !== "0"){
    Lv_valor = ingresar("Ingrese un valor por teclado: ")
}
console.log("Fin del programa") 