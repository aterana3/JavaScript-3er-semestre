// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = '' number
// Lf = '' float
// Ld = '' decimal

// Gv = Variable global Varchar - Caracter
// Gn = '' number
// Gf = '' float
// Gd = '' decimal

console.log("--------------------Matemáticas--------------------");
// Presentar por pantalla si es o no es número par
let Ln_valor = 5;
let Ln_Result = Ln_valor % 2;

if (Ln_Result === 0) {
    console.log(`El número ${Ln_valor} es par`);
} else {
    console.log(`El número ${Ln_valor} no es par`);
}

console.log("------------------------------");
// Recuperar el valor decimal
Ln_valor = 28.123;
let Ln_Parte_Entera = Math.floor(Ln_valor);
console.log(Ln_Parte_Entera);

// Recuperamos el valor en una variable integer
Ln_Parte_Entera = parseInt(Ln_valor);
console.log(Ln_Parte_Entera);

// Recuperamos la parte decimal
//toFixed - redondea las cifras segun el parametro colocado
let Ln_Parte_Decima = Ln_valor % 1;
Ln_Parte_Decima = Ln_Parte_Decima.toFixed(2);
console.log(Ln_Parte_Decima);

// Truncar
//toFixed - redondea las cifras segun el parametro colocado
Ln_Parte_Decima = Ln_valor % 1;
Ln_Parte_Decima = Ln_Parte_Decima.toFixed(3);
console.log(Ln_Parte_Decima);

console.log("------------------------------");

Ln_valor = 80.1265;
console.log(`El número es ${Ln_valor}`);
//toString - Convierte los datos numeros a cadena
//split - Divide la cadena en dos segun el parametro colocado
const [Ln_Parte_Entera2, Ln_Parte_Decima2] = Ln_valor.toString().split(".");
console.log(`Su parte entera es ${Ln_Parte_Entera2} y su parte decimal es ${Ln_Parte_Decima2}`);
