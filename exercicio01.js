/**
 * Inverter uma string
 * Escreva uma função que recebe uma string e retorna ela invertida. *
 */

function revertString(text) {
  // Declara um array
  let lista = [];
  // Divide a palavra original em substrings e a insere em um array
  lista = text.split("");
  // Inverte o array de trás para frente
  lista = lista.reverse();
  // Transforma o array em uma string, retirando os espaços entre os índices
  lista = lista.join("");

 return console.log(`Palavra Invertida: ${lista}`);
}

// Mesmo exercício realizado sem uso de funções nativas
function revertStringManual(text) {
  // Declara um array
  let array = [];
  
  // Laço percorre a String tornando-a substring
  for (let i = 0; i < text.length; i++) {
    // Variável que armazena o caractere a cada volta do laço
    let character = text[i];
    // Adiciona a substring no início do array
    array.unshift(character);
  }
  // Variável recebe o array em forma de string
  let invertString = array.join("");

  return console.log(`Palavra Invertida: ${invertString}`);;
}

revertString("😊👍");
revertStringManual("😊👍");
