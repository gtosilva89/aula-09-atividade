// Utilizando (While), construir um programa que apresente a soma dos cem primeiros números naturais (1 + 2 + 3 +...+ 98 + 99 + 100).

// ENTRADA
let numero = 1;
let soma1 = 0;

// PROCESSAMENTO
while (numero <= 100) {
  soma1 = soma1 + numero ++;
  console.log("A soma atual é : " + soma1);
}

// SAÍDA