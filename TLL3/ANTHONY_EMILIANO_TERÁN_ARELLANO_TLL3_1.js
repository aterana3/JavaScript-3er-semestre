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
let Ln_valor = 3;
let Ln_Result = Ln_valor % 2;

if (Ln_Result === 0) {
    console.log(`El número ${Ln_valor} es par`);
} else {
    console.log(`El número ${Ln_valor} no es par`);
}

if (Ln_valor > 0) {
    console.log(`El número ${Ln_valor} es positivo`);
} else {
    console.log(`El número ${Ln_valor} es negativo`);
}

console.log("------------------------------");
// Indique si el valor PAR Positivo o Par negativo
Ln_valor = 5;
Ln_Result = Ln_valor % 2;

if (Ln_Result === 0) {
    if (Ln_valor > 0) {
        console.log(`El número ${Ln_valor} es positivo par`);
    } else {
        console.log(`El número ${Ln_valor} es negativo par`);
    }
} else {
    if (Ln_valor > 0) {
        console.log(`El número ${Ln_valor} es negativo impar`);
    } else {
        console.log(`El número ${Ln_valor} es positivo impar`);
    }
}

console.log("------------------------------");
