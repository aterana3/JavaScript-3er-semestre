// Anthony Terán Arellano - 3er Semestre
// Lv = Variable local Varchar - Caracter
// Ln = '' number
// Lf = '' float
// Ld = '' decimal

// Gv = Variable global Varchar - Caracter
// Gn = '' number
// Gf = '' float
// Gd = '' decimal

console.log("--------------------Cadena de caracteres--------------------");
// Frase original
let Lv_Frase = "Anita lava la tina";
// Longitud de la frase
console.log(`Cantidad de caracteres en la frase ${Lv_Frase.length}`);

console.log(" ");

console.log("--------------------Frase modificada--------------------");
Lv_Frase = "Anita" + "'-'" + "lava" + "'-'" + "la" + "'-'" + "tina";
console.log("Cadena de caracteres modificada manualmente (quemada):", Lv_Frase);

console.log(" ");

console.log("--------------------Frase mayúscula o minúscula--------------------");
Lv_Frase = "Anita";
console.log(Lv_Frase.toUpperCase());
console.log(Lv_Frase.toLowerCase());

console.log(" ");

console.log("--------------------Frase presentada varias veces--------------------");
// Presentar espacios después de una frase/palabra
Lv_Frase = "Anita";
console.log("Opción 1.-", Lv_Frase.repeat(3));

Lv_Frase = "Anita ";
console.log("Opción 2.-", Lv_Frase.repeat(3));

Lv_Frase = "Anita";
Lv_Frase = Lv_Frase + " ";
console.log("Opción 3.-", Lv_Frase.repeat(3));

Lv_Frase = "Anita";
console.log("Opción 4.-", (Lv_Frase + ' ').repeat(3));

Lv_Frase += " ";
console.log("Opción 5.-", Lv_Frase.repeat(3));

console.log(" ");

console.log("--------------------Encontrar una subcadena--------------------");
Lv_Frase = "Anita lava la tina";
// Encontrar la ubicación de la cadena
let Ln_Frase_Encontrar = Lv_Frase.indexOf("tina");
if (Ln_Frase_Encontrar !== -1) {
    console.log(`La frase se encuentra en la posición ${Ln_Frase_Encontrar}`);
} else {
    console.log("No se encuentra");
}

console.log(" ");

// Cambiar de mayúscula a minúscula y viceversa
console.log("--------------------Volver a mayúscula--------------------");
Lv_Frase = "Anita lava la tina";
let Lv_Frase_May = Lv_Frase.toUpperCase();
let Lv_Frase_Min = Lv_Frase.toLowerCase();

console.log(Lv_Frase);
console.log(Lv_Frase_May);
console.log(Lv_Frase_Min);
    
//charAt - Sirve para obtener un carácter específico en una cadena
//slice - se utiliza para obtener una porción de una cadena
Lv_Frase = Lv_Frase_May.charAt(0).toUpperCase() + Lv_Frase_May.slice(1).toLowerCase();
console.log(Lv_Frase);

console.log(" ");

console.log("--------------------Remplazar un caracter por otro--------------------");

Lv_Frase = "Anita lava la tina";
let Lv_Frase_Update = Lv_Frase.replace("tina", "#");
console.log("--remplazar manualmente--");
console.log(Lv_Frase_Update);
console.log(" ");

let Lv_Frase_2 = "Nosotros";

Lv_Frase_Update = Lv_Frase.replace("Anita", Lv_Frase_2);
console.log("--remplazar variable--");
console.log(Lv_Frase_Update);
console.log(" ");

Lv_Frase_2 = "";

Lv_Frase_Update = Lv_Frase.replace("lava", Lv_Frase_2);
console.log("--uso remplazar para eliminar--");
console.log(Lv_Frase_Update);

console.log(" ");

console.log("--------------------Salto de línea--------------------");
Lv_Frase = "Anita\nlava\nla\ntina";
console.log(Lv_Frase);

console.log(" ");

console.log("--------------------Posiciones--------------------");
Lv_Frase = "Anita lava la tina";

Lv_Frase_2 = Lv_Frase.substring(6, 10);
console.log(Lv_Frase_2);

Lv_Frase_2 = Lv_Frase.substring(14, 18);
console.log(Lv_Frase_2);

Lv_Frase = "Hola mundo";

console.log("\nFrase de abajo a arriba");
//Bucle para escribir la frase de abajo hacia arriba
for (let i = 0; i < Lv_Frase.length; i++) {
    //charAt - Sirve para obtener un carácter específico en una cadena
    console.log(Lv_Frase.charAt(i));
}

console.log("\nFrase de arriba a abajo");
//Bucle para escribir la frase de arriba hacia abajo
for (let i = Lv_Frase.length - 1; i >= 0; i--) {
    //charAt - Sirve para obtener un carácter específico en una cadena
    console.log(Lv_Frase.charAt(i));
}

console.log("--------------------Recuperar patrones en una cadena--------------------");

//substring - se utiliza para obtener una porción de una cadena
console.log(Lv_Frase.substring(1, 9, 2));
console.log(Lv_Frase.substring(1, 8, 4));
console.log(Lv_Frase.substring(1, 9, 3));