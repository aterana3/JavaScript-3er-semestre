// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = "" number
// Lf = "" float
// Ld = "" decimal

// Gv = Variable global Varchar - Caracter
// Gn = "" number
// Gf = "" float
// Gd = "" decimal

// Importar módulo de matemáticas

// Cadenas
const Lv_Cadena1 = "Hola mundo";
const Lv_Cadena2 = 'Hola mundo';
const Lv_Cadena3 = 'Según lo que dijo la compañera: "Yo no fui"';
const Lv_Cadena4 = "El valor del iva es '0.12'";

console.log(Lv_Cadena1);
console.log(Lv_Cadena2);
console.log(Lv_Cadena3);
console.log(Lv_Cadena4);

// Valores numericos
let Ln_Valor1 = 2;
let Ln_Valor2 = 2;

console.log("Suma");
let Ln_Result = Ln_Valor1 + Ln_Valor2;
console.log(Ln_Result);

console.log("Resta");
Ln_Result = Ln_Valor1 - Ln_Valor2;
console.log(Ln_Result);

console.log("Multiplicacion");
Ln_Result = Ln_Valor1 * Ln_Valor2;
console.log(Ln_Result);

console.log("Division");
Ln_Result = Ln_Valor1 / Ln_Valor2;
console.log(Ln_Result);

console.log("Potencia");
Ln_Result = Math.pow(Ln_Valor1, Ln_Valor2);
console.log(Ln_Result);

console.log("Seno");
let Lf_Radianes = (Ln_Valor1 * Math.PI) / 180;
Ln_Result = Math.sin(Lf_Radianes);
console.log(Ln_Result);

console.log("Coseno");
Lf_Radianes = (Ln_Valor1 * Math.PI) / 180;
Ln_Result = Math.cos(Lf_Radianes);
console.log(Ln_Result);

// Asignacion
let Lv_variables = 2.3;
console.log(typeof Lv_variables);

// Caracteres
const Lv_Frase = "Anita lava la tina";
console.log(`Cantidad de caracteres en la frase ${Lv_Frase}: ${Lv_Frase.length}`);