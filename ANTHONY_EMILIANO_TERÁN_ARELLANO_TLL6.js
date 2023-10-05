/*
* Anthony Terán Arellano - 3er Semestre
*/

// Proceso de encriptación de clase
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const clave = "!r#$%&()78956[\\_,;:~ç@`^›1234?¡°{}´|<>€§…¸.•kdfhuw";

// Función para encriptar la contraseña
function proceso_encriptado(frase) {
  let Ov_Frase_Encriptada = "";
  for (let letraABC of frase) {
    // Se busca si en la clave se encuentra el respectivo caracter en la variable alfabeto
    if (alfabeto.includes(letraABC)) {
      // Si se encuentra, se procede a obtener su ubicación
      const indice = alfabeto.indexOf(letraABC);
      // Y reemplazarlo con un valor de la variable clave de la misma ubicación
      const letraEncriptada = clave.charAt(indice);
      Ov_Frase_Encriptada += letraEncriptada;
    } else {
      // Si no se encuentra tal valor en la variable alfabeto, se utiliza la misma letra
      Ov_Frase_Encriptada += letraABC;
    }
  }
  return Ov_Frase_Encriptada;
}

function proceso_dencriptado(frase) {
  let Ov_Frase_Desencriptada = "";
  for (let letraClave of frase) {
    // Se busca si en la clave se encuentra el respectivo caracter en la variable clave
    if (clave.includes(letraClave)) {
      // Si se encuentra, se procede a obtener su ubicación
      const indice = clave.indexOf(letraClave);
      // Y reemplazarlo con un valor de la variable alfabeto de la misma ubicación
      const letraDesencriptada = alfabeto.charAt(indice);
      Ov_Frase_Desencriptada += letraDesencriptada;
    } else {
      // Si no se encuentra tal valor en la variable clave, se utiliza la misma letra
      Ov_Frase_Desencriptada += letraClave;
    }
  }
  return Ov_Frase_Desencriptada;
}

// 2do - Escribir la palabra/clave y encriptarla
const Lv_Frase = "Anita lava la tina";
const Lv_Frase_Encriptada = proceso_encriptado(Lv_Frase);
console.log('La frase encriptada es:', Lv_Frase_Encriptada);

// 3ro. Desencriptar la palabra/clave
const Lv_Frase_Desencriptada = proceso_dencriptado(Lv_Frase_Encriptada);
console.log('La frase desencriptada es:', Lv_Frase_Desencriptada);
