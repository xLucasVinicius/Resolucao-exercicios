//exercício 1
function isFibonacci(num) {
  let a = 0, b = 1, nextTerm = a + b;

  while (nextTerm <= num) {
    if (nextTerm === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = nextTerm;
    nextTerm = a + b;
  }
  return `${num} não pertence à sequência de Fibonacci.`;
}

const num = 13; // Número para verificar
console.log(isFibonacci(num));
//----------------------------------------------------


//exercicio 2 
function countLetterA(str) {
  let count = 0;
  for (let char of str) {
    if (char.toLowerCase() === 'a') {
      count++;
    }
  }
  return `A letra 'a' aparece ${count} vezes.`;
}

const str = "A Amazônia é uma área rica em biodiversidade.";
console.log(countLetterA(str));
//------------------------------------------------------

//exercicio 3
let INDICE = 12, SOMA = 0, K = 1;
while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(SOMA);  // Resultado: 91
//---------------------------------------------------------

//exercicio 4
// a) 1, 3, 5, 7, ___
//Resposta: 9 (sequência de números ímpares).

//b) 2, 4, 8, 16, 32, 64, ____
//Resposta: 128 (multiplicação por 2).

//c) 0, 1, 4, 9, 16, 25, 36, ____
//Resposta: 49 (quadrados perfeitos: 0², 1², 2², 3², ...).

//d) 4, 16, 36, 64, ____
//Resposta: 100 (quadrados de números pares: 2², 4², 6², 8², ...).

//e) 1, 1, 2, 3, 5, 8, ____
//Resposta: 13 (sequência de Fibonacci).

//f) 2, 10, 12, 16, 17, 18, 19, ____
//Resposta: 20 (sequência baseada em adicionar 8, depois +2, +4, e a partir daí adiciona-se 1).
//---------------------------------------------------------------

//exercicio 5
//1. Ligue o primeiro interruptor e deixe ligado por alguns minutos.

//2. Desligue o primeiro interruptor e ligue o segundo.

//3. Vá até a sala das lâmpadas.

//A lâmpada que está acesa pertence ao segundo interruptor.

//A lâmpada que está quente mas apagada pertence ao primeiro interruptor.

//A lâmpada que está fria pertence ao terceiro interruptor (que nunca foi ligado).
