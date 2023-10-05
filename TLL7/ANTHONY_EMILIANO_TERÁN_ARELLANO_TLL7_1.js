const crypto = require('crypto-js');

// Generamos una clave de cifrado
const clave = crypto.lib.WordArray.random(256 / 8).toString();

// Frase que vamos a cifrar
const texto_original = "Anita lava la tina";

// Codificamos-Ciframos la frase
const texto_cifrado = crypto.AES.encrypt(texto_original, clave).toString();

// Decodificamos-Deciframos la frase
const texto_decifrado = crypto.AES.decrypt(texto_cifrado, clave).toString(crypto.enc.Utf8);

console.log("---------------------------------");
console.log(`Texto original: ${texto_original}`);
console.log("---------------------------------");
console.log(`Texto cifrado: ${texto_cifrado}`);
console.log("---------------------------------");
console.log(`Texto decifrado: ${texto_decifrado}`);
console.log("---------------------------------");